"use client";
import usePagination from "lastHomework/hooks/usePagination";
import _ from "lodash";
import { Imovie } from "lastHomework/interfaces/InterfacesMovie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import {
  getFavorite,
  getFilterByCertification,
  getMovieGenres,
  getMovieYear,
  getMovies,
  getSearchElement,
} from "lastHomework/utils/fetchMethod";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";

let cases = "";

const FavoriteItem = () => {
  const [movie, setMovie] = useState<Imovie[]>();
  const [search, setSearch] = useState("");
  const [certification, setCertification] = useState<string>();
  const [genre, setGenre] = useState<string>("");
  const [release, setRelease] = useState<string>("");
  const router = useRouter();

  const {
    currentPage,
    setCurrentPage,
    elementsPerPage,
    indexOfLastElement,
    indexOfFirtsElement,
    handleNextPage,
    handlePreviousPage,
    pageNumbers,
  } = usePagination(1, 8, movie?.length || 0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const currentElement =
    movie && movie.slice(indexOfFirtsElement, indexOfLastElement);

  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true);
      try {
        let response = undefined;
        const sessionId = localStorage.getItem("sessionId");
        const accountId = localStorage.getItem("account_id");

        response = await getFavorite(accountId!, sessionId!);

        if (response !== undefined) {
          setMovie(response?.results);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [movie, certification, release, cases]);

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <button
        className={`pagination_btn page-item number__btn ${
          number === currentPage ? "activeBtn" : ""
        }`}
        key={number}
        onClick={() => {
          setCurrentPage(number);
        }}
      >
        {number}
      </button>
    );
  });

  return (
    <div>
      <div>
        <section className="nav-movie">
          <Image
            width={1920}
            height={500}
            layout="responsive"
            className="navbar__custom--IMG position-relative"
            src="https://themebeyond.com/html/movflx/img/bg/breadcrumb_bg.jpg"
            alt=""
          />
          <h2 className="position-absolute text-center text-whites">Movies</h2>
        </section>
        <main
          className="container__movies"
          style={{ margin: "12vw", marginTop: "5vw" }}
        >
          <section>
            <div className="row justify-content-center">
              {currentElement?.map((item) => (
                <div className="col-6 col-md-3 mb-3">
                  <div
                    className="card mx-1 h-25"
                    style={{
                      width: "100%",
                      backgroundColor: "black",
                      color: "#e4d804",
                    }}
                  >
                    <a href={`details/${item.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                    <div className="card-body">
                      <div className="top">
                        <h5 className="title">
                          <a
                            style={{ textDecoration: "none", color: "#fff" }}
                            href="movie-details.html"
                          >
                            {item.original_title}
                          </a>
                        </h5>
                        <span className="date">{item.release_date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="container__pagination pagination">
            {currentPage > 1 && (
              <button
                className="pagination_btn word__btn"
                onClick={handlePreviousPage}
              >
                Previous
              </button>
            )}
            <div className="container__pagination--btn ">
              {renderPageNumbers}
            </div>
            {currentPage < pageNumbers.length && (
              <button
                className="pagination_btn word__btn"
                onClick={handleNextPage}
              >
                Next
              </button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default FavoriteItem;

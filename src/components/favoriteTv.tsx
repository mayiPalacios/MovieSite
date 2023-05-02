"use client";
import usePagination from "lastHomework/hooks/usePagination";
import _ from "lodash";
import { Imovie } from "lastHomework/interfaces/InterfacesMovie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { getFavorite, getFavoriteTv } from "lastHomework/utils/fetchMethod";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { ItvShow } from "lastHomework/interfaces/InterfacesTvShow";

let cases = "";

const FavoriteTv = () => {
  const [tv, setTv] = useState<ItvShow[]>();
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
  } = usePagination(1, 8, tv?.length || 0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const currentElement =
    tv && tv.slice(indexOfFirtsElement, indexOfLastElement);

  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true);
      try {
        let response = undefined;
        const sessionId = localStorage.getItem("sessionId");
        const accountId = localStorage.getItem("account_id");

        response = await getFavoriteTv(accountId!, sessionId!);

        if (response !== undefined) {
          setTv(response.results);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [tv, certification, release, cases]);

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
        <main
          className="container__movies"
          style={{ margin: "12vw", marginTop: "5vw" }}
        >
          <h2>TV SHOWS</h2>
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
                    <a href={`detailsTV/${item.id}`}>
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
                            {item.name}
                          </a>
                        </h5>
                        <span className="date">{item.first_air_date}</span>
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

export default FavoriteTv;

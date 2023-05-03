"use client";
import usePagination from "lastHomework/hooks/usePagination";
import _ from "lodash";
import { Imovie } from "lastHomework/interfaces/InterfacesMovie";
import {
  getFilterByCertification,
  getMovieGenres,
  getMovieYear,
  getMovies,
  getSearchElement,
} from "lastHomework/utils/fetchMethod";
import { useEffect, useState } from "react";
import Image from "next/image";
let cases = "";

const Movie = () => {
  const [movie, setMovie] = useState<Imovie[]>();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState("1");
  const [certification, setCertification] = useState<string>();
  const [genre, setGenre] = useState<string>("");
  const [release, setRelease] = useState<string>("");
  const {
    currentPage,
    setCurrentPage,
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

  const fetchMovie = async () => {
    setIsLoading(true);
    try {
      let response = undefined;

      switch (cases) {
        case "":
          response = await getMovies(page);
          break;
        case "certification":
          response = await getFilterByCertification(certification!);
          break;
        case "genre":
          response = await getMovieGenres(genre!);
          break;
        case "release":
          response = await getMovieYear(release);
          break;
      }

      if (response !== undefined) {
        setMovie(response?.data.results);
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovie();
  }, [cases]);

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

  const handleCertification = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCertification(event.target.value);
    cases = "certification";
  };

  const handleGenres = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGenre(event.target.value);
    cases = "genre";
  };

  const handleRelease = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRelease(event.target.value);
    cases = "release";
  };

  const handlePage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(event.target.value);
  };

  return (
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
        {isLoading && (
          <div color="#fff">
            <h1>loading...</h1>
          </div>
        )}
        <div className="container__filters flex-wrap d-flex justify-content-end align-items-center">
          <div>
            <input
              type="number"
              min={1}
              max={500}
              placeholder="Page number"
              style={{ textAlign: "center" }}
              onChange={handlePage}
            />
          </div>

          <select
            className="form-select selt__btn"
            aria-label="Default select example"
            onChange={handleCertification}
          >
            <option selected>Certification</option>
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG3">PG3</option>
            <option value="R">R</option>
            <option value="NC-17">NC-17</option>
          </select>

          <select
            className="form-select selt__btn"
            aria-label="Default select example"
            onChange={handleGenres}
          >
            <option selected>Genres</option>
            <option value="28">Action</option>
            <option value="12">Adventure</option>
            <option value="16">Animation</option>
            <option value="35">Comedy</option>
            <option value="80">Crime</option>
            <option value="99">Documentary</option>
            <option value="18">Drama</option>
            <option value="10751">Family</option>
            <option value="14">Fantasy</option>
            <option value="36">History</option>
          </select>

          <select
            className="form-select selt__btn"
            aria-label="Default select example"
            onChange={handleRelease}
          >
            <option selected>Release Year</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
          </select>
        </div>

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
          <div className="container__pagination--btn ">{renderPageNumbers}</div>
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
  );
};

export default Movie;

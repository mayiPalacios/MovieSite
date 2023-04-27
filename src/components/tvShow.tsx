"use client";
import usePagination from "lastHomework/hooks/usePagination";
import _ from "lodash";
import {
  getFilterByCertificationTv,
  getSearchTv,
  getTvGenres,
  getTvShow,
  getTvYear,
} from "lastHomework/utils/fetchMethod";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ItvShow } from "lastHomework/interfaces/InterfacesTvShow";
let cases = "";

const TvShow = () => {
  const [tv, setTv] = useState<ItvShow[]>([]);
  const [search, setSearch] = useState("");
  const [certification, setCertification] = useState<string>();
  const [genre, setGenre] = useState<string>("");
  const [release, setRelease] = useState<string>("");
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
    const fetchTv = async () => {
      setIsLoading(true);
      try {
        let response = undefined;
        let prueba;
        switch (cases) {
          case "":
            response = await getTvShow();
            break;
          case "release":
            response = await getTvYear(release);
            break;
          case "genre":
            response = await getTvGenres(genre!);
            break;

          case "title":
            response = await getSearchTv(search);
            break;
        }

        if (response !== undefined) {
          setTv(response?.data.results);
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
        setIsLoading(false);
      }
    };
    fetchTv();
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

  const handleSearchBytitle = _.debounce((event) => {
    if (event.target.value !== "") {
      setSearch(event.target.value);
      cases = "title";
    } else {
      setSearch("");
      cases = "";
    }
  }, 1000);

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
        <div className="container__filters flex-wrap d-flex justify-content-end align-items-center">
          <div>
            <input
              type="text"
              id="inpt__search--character"
              onChange={handleSearchBytitle}
            />
          </div>

          <select
            className="form-select selt__btn"
            aria-label="Default select example"
            onChange={handleCertification}
          >
            <option selected>Certification</option>
            <option value="TV-Y">TV-Y</option>
            <option value="TV-Y7">TV-Y7</option>
            <option value="TV-G">TV-G</option>
            <option value="TV-PG">TV-PG</option>
            <option value="TV-MA">TV-MA</option>
            <option value="TV-14">TV-14</option>
          </select>

          <select
            className="form-select selt__btn"
            aria-label="Default select example"
            onChange={handleGenres}
          >
            <option selected>Genres</option>
            <option value="10759">Action && Adventure</option>
            <option value="9648">Mystery</option>
            <option value="16">Animation</option>
            <option value="35">Comedy</option>
            <option value="80">Crime</option>
            <option value="99">Documentary</option>
            <option value="18">Drama</option>
            <option value="10751">Family</option>
            <option value="10765">Sci-Fi & Fantasy</option>
            <option value="10762">Kids</option>
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
                  <a href="#">
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

export default TvShow;

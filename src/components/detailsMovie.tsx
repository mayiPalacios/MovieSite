"use client";
import { Imovie } from "lastHomework/interfaces/InterfacesMovie";
import usePagination from "lastHomework/hooks/usePagination";
import {
  getDetailMovie,
  getSimilarMovies,
} from "lastHomework/utils/fetchMethod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export interface Props {
  detailsId: number;
}

const DetailsMovie = (props: Props) => {
  const [detailMovie, setDmovie] = useState<Imovie>();
  const [similar, setSimilar] = useState<Imovie[]>();
  const {
    currentPage,
    setCurrentPage,
    elementsPerPage,
    indexOfLastElement,
    indexOfFirtsElement,
    handleNextPage,
    handlePreviousPage,
    pageNumbers,
  } = usePagination(1, 4, similar?.length || 0);

  const currentElement =
    similar && similar.slice(indexOfFirtsElement, indexOfLastElement);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        let response = await getDetailMovie(props.detailsId);
        let req = await getSimilarMovies(props.detailsId);
        setSimilar(req);
        setDmovie(response.data);
      } catch (error) {}
    };
    fetchDetail();
  }, []);

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
    <div className="container__details">
      <section className="  container__card--detail movie-details-area">
        <div className="container__detail">
          <div className=" ">
            <div className="movie-details-img ">
              <img
                src={`https://image.tmdb.org/t/p/w342${detailMovie?.poster_path}`}
              />
            </div>
          </div>
          <div className="container__properties">
            <div className="movie-details-content">
              <h2>{detailMovie?.title}</h2>
              <div className="banner-meta">
                <ul className=" d-flex flex-wrap gap-1">
                  <li className="popularity">{detailMovie?.popularity}</li>
                  <li className=" gap-1">
                    {detailMovie?.genres?.map((genres) => (
                      <span>{genres.name}</span>
                    ))}
                  </li>
                  <li className=" gap-1">
                    <span>
                      <FontAwesomeIcon icon={faCalendarDay} color="#ffc107" />{" "}
                      {detailMovie?.release_date}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faClock} color="#ffc107" />{" "}
                      {detailMovie?.runtime} min
                    </span>
                  </li>
                </ul>
              </div>
              <div className="container__overview">
                <p>{detailMovie?.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="container__movies"
        style={{ margin: "12vw", marginTop: "5vw" }}
      >
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
                <a href={`${item.id}`}>
                  <img
                    src={
                      item.poster_path !== null
                        ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                        : "data:image/jpeg;base64,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"
                    }
                    style={item.poster_path === null ? { height: "500px" } : {}}
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
      </section>
    </div>
  );
};
export default DetailsMovie;

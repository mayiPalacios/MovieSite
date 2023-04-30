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
import {
  Icast,
  Icredits,
  Icrew,
} from "lastHomework/interfaces/InterfacesCredits";
import { getCredits } from "lastHomework/utils/fetchMethod";
import PaginationDMovie from "./pagination/paginationDetailMovieCast";
import PaginationDMovieCrew from "./pagination/paginationDetailMovieCrew";

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

      <PaginationDMovie detailsId={props.detailsId} />

      <PaginationDMovieCrew detailsId={props.detailsId} />

      <section
        className="container__movies"
        style={{ margin: "12vw", marginTop: "5vw" }}
      >
        <>
          <h2>Similar Movies</h2>
        </>
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
                        : "https://previews.123rf.com/images/9dreamstudio/9dreamstudio1802/9dreamstudio180202633/95768427-fondo-de-cine-ver-pel%C3%ADculas-palomitas-de-ma%C3%ADz-y-claqueta-sobre-fondo-amarillo-vista-superior-copia.jpg"
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

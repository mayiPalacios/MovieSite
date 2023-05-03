"use client";
import { Imovie } from "lastHomework/interfaces/InterfacesMovie";
import usePagination from "lastHomework/hooks/usePagination";
import useAuth from "lastHomework/hooks/useAuth";
import {
  getDetailMovie,
  getSimilarMovies,
  postFavoriteM,
} from "lastHomework/utils/fetchMethod";

import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import PaginationDMovie from "./pagination/paginationDetailMovieCast";
import PaginationDMovieCrew from "./pagination/paginationDetailMovieCrew";
import {
  Ifavorite,
  IsuccessFavorite,
} from "lastHomework/interfaces/InterfacesFavorite";

export interface Props {
  detailsId: number;
}

const DetailsMovie = (props: Props) => {
  const [detailMovie, setDmovie] = useState<Imovie>();
  const [similar, setSimilar] = useState<Imovie[]>();
  const [succesFav, setSuccesFav] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const {
    currentPage,
    setCurrentPage,
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
      setIsLoading(true);
      try {
        let response = await getDetailMovie(props.detailsId);
        let req = await getSimilarMovies(props.detailsId);

        setSimilar(req);
        setDmovie(response.data);
      } catch (error) {
        setError(error as Error);
      }
      setIsLoading(false);
    };
    fetchDetail();
  }, []);

  const handleIdElement = async () => {
    const addFavMovie: Ifavorite = {
      media_type: "movie",
      media_id: detailMovie?.id!,
      favorite: true,
    };
    const sessionID = localStorage.getItem("sessionId");
    const account_id = localStorage.getItem("account_id");

    const request: IsuccessFavorite = await postFavoriteM(
      account_id!,
      sessionID!,
      addFavMovie
    );
    setSuccesFav(request.success);
  };

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
  const isLoggedIn = useAuth();

  const handleSucces = () => {
    setSuccesFav(false);
  };

  const AlertSave = () => {
    return (
      <div className="container__alert">
        <div className="alert__content" id="cookiesPopup">
          <img
            src="https://i.pinimg.com/564x/2e/ea/95/2eea95d8eb44b2cece4c79a6fea25573.jpg"
            alt="cookies-img"
          />
          <p>The movie is saved</p>
          <button className="btn__accept" onClick={handleSucces}>
            That's fine!
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container__details">
      <section className="  container__card--detail movie__details--area">
        <div className="container__detail">
          <div className=" ">
            <div className="movie-details-img ">
              <img
                src={`https://image.tmdb.org/t/p/w342${detailMovie?.poster_path}`}
              />
            </div>
          </div>
          {isLoading && (
            <div color="#fff">
              <h1>loading...</h1>
            </div>
          )}
          {error && (
            <div color="#fff">
              <h1>{error.message}</h1>
            </div>
          )}
          <div className="container__properties">
            <div className="movie-details-content">
              <h2>{detailMovie?.title}</h2>
              <div className="banner-meta">
                <ul className=" d-flex flex-wrap gap-1">
                  <li className="popularity">
                    <span>Populatiry: {detailMovie?.popularity}</span>
                  </li>
                  <li className=" gap-1">
                    {detailMovie?.genres?.map((genres) => (
                      <span key={genres.id}>{genres.name}</span>
                    ))}
                  </li>
                  <li className=" gap-1">
                    <span>
                      <FontAwesomeIcon icon={faCalendarDay} color="#ffc107" />
                      {detailMovie?.release_date}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faClock} color="#ffc107" />
                      {detailMovie?.runtime} min
                    </span>
                  </li>
                </ul>
                {succesFav && <AlertSave />}
              </div>
              <div className="container__overview">
                <p>{detailMovie?.overview}</p>
              </div>
              {isLoggedIn && (
                <button
                  className="btn__save--element"
                  onClick={handleIdElement}
                >
                  <FontAwesomeIcon
                    icon={faBookmark}
                    style={{ height: "10vh", width: "3vw" }}
                    color="#ffc107"
                  />
                </button>
              )}
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
            <div key={item.id} className="col-6 col-md-3 mb-3">
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

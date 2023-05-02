"use client";
import usePagination from "lastHomework/hooks/usePagination";
import _ from "lodash";
import { Imovie } from "lastHomework/interfaces/InterfacesMovie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { getFavorite, removeFavorite } from "lastHomework/utils/fetchMethod";
import { useEffect, useState } from "react";

import {
  Ifavorite,
  IsuccessFavorite,
} from "lastHomework/interfaces/InterfacesFavorite";

const FavoriteItem = () => {
  const [movie, setMovie] = useState<Imovie[]>();
  const [idFav, SetidFav] = useState<number>();
  const [RemoveFav, setRemoveFav] = useState<boolean>(false);

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
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovie();
  }, [RemoveFav]);

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

  const handleIdElement = async () => {
    const addFavMovie: Ifavorite = {
      media_type: "movie",
      media_id: idFav!,
      favorite: false,
    };
    const sessionID = localStorage.getItem("sessionId");
    const account_id = localStorage.getItem("account_id");

    const request: IsuccessFavorite = await removeFavorite(
      account_id!,
      sessionID!,
      addFavMovie
    );
    setRemoveFav(false);
  };

  const handleActiveAlert = (idMovie: number) => {
    setRemoveFav(true);
    SetidFav(idMovie);
  };

  const handleCancelRemove = () => {
    setRemoveFav(false);
  };

  const AlertSave = () => {
    return (
      <div className="container__alert" style={{ marginTop: "82vh" }}>
        <div className="alert__content" id="cookiesPopup">
          <img
            src="https://i.pinimg.com/564x/2e/ea/95/2eea95d8eb44b2cece4c79a6fea25573.jpg"
            alt="cookies-img"
          />
          <p>Are you sure? you cant undo this action</p>
          <div>
            <button className="btn__accept" onClick={handleIdElement}>
              Yes
            </button>
            <button className="btn__cancel" onClick={handleCancelRemove}>
              No
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {RemoveFav && <AlertSave />}
      <div>
        <main
          className="container__movies"
          style={{ margin: "12vw", marginTop: "5vw" }}
        >
          {isLoading && (
            <div color="#fff">
              <h1>loading...</h1>
            </div>
          )}
          <h2>MOVIES</h2>

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
                        <button
                          className="btn__save--element"
                          onClick={() => handleActiveAlert(item.id)}
                        >
                          <FontAwesomeIcon
                            icon={faBookmark}
                            style={{ height: "4.5vh", width: "2vw" }}
                            color="#ffc107"
                          />
                        </button>
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

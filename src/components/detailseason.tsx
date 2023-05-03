"use client";
import usePagination from "lastHomework/hooks/usePagination";
import { Iepisodies } from "lastHomework/interfaces/InterfacesSeason";
import { getSeason } from "lastHomework/utils/fetchMethod";
import { useEffect, useState } from "react";

export interface Props {
  detailsTvId: number;
  seasonNumber: string;
}

const Detailseason = (props: Props) => {
  const [episode, setEpisode] = useState<Iepisodies[]>();
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
  } = usePagination(1, 4, episode?.length || 0);

  const currentElement =
    episode && episode.slice(indexOfFirtsElement, indexOfLastElement);

  useEffect(() => {
    const axiosDetail = async () => {
      setIsLoading(true);
      try {
        const req = await getSeason(props.detailsTvId, props.seasonNumber);
        setEpisode(req.episodes);
      } catch (error) {
        setError(error as Error);
      }
      setIsLoading(false);
    };

    axiosDetail();
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
    <div className="container__season">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2>SEASON {props.seasonNumber}</h2>
          </div>
        </div>
      </div>

      <div
        className="container__pagination pagination"
        style={{ marginLeft: "42px" }}
      >
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
          <button className="pagination_btn word__btn" onClick={handleNextPage}>
            Next
          </button>
        )}
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
      {currentElement?.map((item) => (
        <section className="episodies__details--area">
          <div className="container__detail">
            <div className=" ">
              <div className=" ">
                <img
                  src={`https://image.tmdb.org/t/p/w342${item.still_path}`}
                />
              </div>
            </div>
            <div style={{ paddingLeft: "18px" }}>
              <div className="">
                <h2>{item.name}</h2>

                <div className="container__overview">
                  <p>{item.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Detailseason;

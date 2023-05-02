import usePagination from "lastHomework/hooks/usePagination";
import { Icredits } from "lastHomework/interfaces/InterfacesCredits";
import { getCredits } from "lastHomework/utils/fetchMethod";
import { useEffect, useState } from "react";
import { Props } from "../detailsMovie";

const PaginationDMovie = (props: Props) => {
  const [credits, setCredits] = useState<Icredits>();
  const {
    currentPage,
    setCurrentPage,
    elementsPerPage,
    indexOfLastElement,
    indexOfFirtsElement,
    handleNextPage,
    handlePreviousPage,
    pageNumbers,
  } = usePagination(1, 4, credits?.cast?.length || 0);
  const currentElement =
    credits?.cast &&
    credits?.cast.slice(indexOfFirtsElement, indexOfLastElement);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        let reqCredits = await getCredits(
          props.detailsId,
          "https://api.themoviedb.org/3/movie/"
        );
        setCredits(reqCredits.data);
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
    <section
      className="container__movies"
      style={{ margin: "12vw", marginTop: "5vw" }}
    >
      <>
        <h2>Cast</h2>
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
              <a href={`/detailPerson/${item.id}`}>
                <img
                  src={
                    item.profile_path !== null
                      ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                      : "https://previews.123rf.com/images/9dreamstudio/9dreamstudio1802/9dreamstudio180202633/95768427-fondo-de-cine-ver-pel%C3%ADculas-palomitas-de-ma%C3%ADz-y-claqueta-sobre-fondo-amarillo-vista-superior-copia.jpg"
                  }
                  style={item.profile_path === null ? { height: "500px" } : {}}
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
                      {item.original_name}
                    </a>
                  </h5>
                  <span className="date">{item.character}</span>
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
          <button className="pagination_btn word__btn" onClick={handleNextPage}>
            Next
          </button>
        )}
      </div>
    </section>
  );
};

export default PaginationDMovie;

"use client";
import usePagination from "lastHomework/hooks/usePagination";
import { Isearch } from "lastHomework/interfaces/InterfacesSearch";
import { getSearchElement } from "lastHomework/utils/fetchMethod";
import _ from "lodash";
import { useEffect, useState } from "react";

const SearchComponent = () => {
  const [search, setSearch] = useState("");
  const [element, setElement] = useState<Isearch[]>();
  const [prueba, setPrueba] = useState();
  const {
    currentPage,
    setCurrentPage,
    indexOfLastElement,
    indexOfFirtsElement,
    handleNextPage,
    handlePreviousPage,
    pageNumbers,
  } = usePagination(1, 8, search?.length || 0);

  const currentElement =
    element && element.slice(indexOfFirtsElement, indexOfLastElement);

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await getSearchElement(search);

        setElement(response?.results);
      } catch (error) {}
    };
    fetchSearch();
  }, [search]);

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

  const handleSearchBytitle = _.debounce((event) => {
    if (event.target.value !== "") {
      setSearch(event.target.value);
    } else {
      setSearch("");
    }
  }, 1000);

  return (
    <main
      className="container__movies"
      style={{
        margin: "12vw",
        marginTop: "3vw",
        minHeight: "59vh",
        height: "auto",
      }}
    >
      <div className="container__search">
        <div className="container__inpt mb-3" style={{ marginTop: "2vh" }}>
          <h2>Search</h2>
          <input
            type="text"
            placeholder="search"
            style={{ textAlign: "center", width: "22vw" }}
            onChange={handleSearchBytitle}
          />
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
                          {item.original_title === undefined
                            ? item.name
                            : item.original_title}
                        </a>
                      </h5>
                      <span className="date">
                        {item.release_date === undefined
                          ? item.first_air_date
                          : item.release_date}
                      </span>
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
      </div>{" "}
    </main>
  );
};

export default SearchComponent;

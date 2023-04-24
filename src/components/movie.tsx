"use client";
import { Imovie } from "lastHomework/interfaces/InterfacesMovie";
import {
  GET_MOVIE_FAILURE,
  GET_MOVIE_REQUEST,
} from "lastHomework/redux/actionsMethods/getMovieAction";
import { getMovies } from "lastHomework/utils/fetchMethod";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

const Movie = () => {
  const [prueba, setPrueba] = useState<Imovie[]>();
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        let response = await getMovies();
        setPrueba(response?.data.results);
      } catch (error) {
        if (error instanceof Error) {
        }
      }
    };
    fetchMovie();
  }, [prueba]);

  if (prueba && prueba) {
    console.log(prueba);
  } else {
    console.log("No se encontraron resultados");
  }

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

      <main className="mt-5">
        <section>
          <div className="d-flex justify-content-center">
            <div
              className="card mx-3 h-25"
              style={{
                width: "18rem",
                backgroundColor: "black",
                color: "#e4d804",
              }}
            >
              <a href="#">
                <img
                  src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/XOTCJN6NQJGHDAMZ5KJRWVMVY4.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </a>
              <div className="card-body ">
                <div className="top">
                  <h5 className="title">
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href="movie-details.html"
                    >
                      Mario Bros
                    </a>
                  </h5>
                  <span className="date">2023</span>
                </div>
              </div>
            </div>

            <div
              className="card mx-3 h-25"
              style={{
                width: "18rem",
                backgroundColor: "black",
                color: "#e4d804",
              }}
            >
              <a href="#">
                <img
                  src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/XOTCJN6NQJGHDAMZ5KJRWVMVY4.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </a>
              <div className="card-body ">
                <div className="top">
                  <h5 className="title">
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href="movie-details.html"
                    >
                      Mario Bros
                    </a>
                  </h5>
                  <span className="date">2023</span>
                </div>
              </div>
            </div>

            <div
              className="card mx-3 h-25"
              style={{
                width: "18rem",
                backgroundColor: "black",
                color: "#e4d804",
              }}
            >
              <a href="#">
                <img
                  src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/XOTCJN6NQJGHDAMZ5KJRWVMVY4.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </a>
              <div className="card-body ">
                <div className="top">
                  <h5 className="title">
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href="movie-details.html"
                    >
                      Mario Bros
                    </a>
                  </h5>
                  <span className="date">2023</span>
                </div>
              </div>
            </div>

            <div
              className="card mx-3 h-25"
              style={{
                width: "18rem",
                backgroundColor: "black",
                color: "#e4d804",
              }}
            >
              <a href="#">
                <img
                  src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/XOTCJN6NQJGHDAMZ5KJRWVMVY4.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </a>
              <div className="card-body ">
                <div className="top">
                  <h5 className="title">
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href="movie-details.html"
                    >
                      Mario Bros
                    </a>
                  </h5>
                  <span className="date">2023</span>
                </div>
              </div>
            </div>

            <div
              className="card mx-3 h-25"
              style={{
                width: "18rem",
                backgroundColor: "black",
                color: "#e4d804",
              }}
            >
              <a href="#">
                <img
                  src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/XOTCJN6NQJGHDAMZ5KJRWVMVY4.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </a>
              <div className="card-body ">
                <div className="top">
                  <h5 className="title">
                    <a
                      style={{ textDecoration: "none", color: "#fff" }}
                      href="movie-details.html"
                    >
                      Mario Bros
                    </a>
                  </h5>
                  <span className="date">2023</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Movie;

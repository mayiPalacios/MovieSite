"use client";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Iperson } from "lastHomework/interfaces/InterfacesPerson";
import { detailPerson } from "lastHomework/utils/fetchMethod";
import { useEffect, useState } from "react";

export interface Props {
  idPerson: number;
}

const DetailPerson = (props: Props) => {
  const [person, setPerson] = useState<Iperson>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();
  useEffect(() => {
    const fetchDetail = async () => {
      setIsLoading(true);
      try {
        const response = await detailPerson(props.idPerson);
        setPerson(response);
      } catch (error) {
        setError(error as Error);
      }
      setIsLoading(false);
    };
    fetchDetail();
  }, []);

  return (
    <div className="container__details">
      <section className="  container__card--detail movie__details--area">
        <div className="container__detail">
          <div className=" ">
            <div className="movie-details-img ">
              <img
                src={`https://image.tmdb.org/t/p/w342${person?.profile_path}`}
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
              <h2>{person?.name}</h2>
              <div className="banner-meta">
                <ul className=" d-flex flex-wrap gap-1">
                  <li className="popularity">
                    <span>ID: {props.idPerson}</span>
                  </li>

                  <li className="popularity">
                    <span>Popularity: {person?.popularity}</span>
                  </li>

                  <li className=" gap-1">
                    <span>
                      <FontAwesomeIcon icon={faCalendarDay} color="#ffc107" />{" "}
                      Birthday : {person?.birthday}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="container__overview">
                <p>{person?.biography}</p>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default DetailPerson;

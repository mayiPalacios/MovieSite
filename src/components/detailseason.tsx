"use client";
import { Iepisodies } from "lastHomework/interfaces/InterfacesSeason";
import { getSeason } from "lastHomework/utils/fetchMethod";
import { useEffect, useState } from "react";

export interface Props {
  detailsTvId: number;
  seasonNumber: string;
}

const Detailseason = (props: Props) => {
  const [episode, setEpisode] = useState<Iepisodies[]>();

  useEffect(() => {
    const axiosDetail = async () => {
      const req = await getSeason(props.detailsTvId, props.seasonNumber);
      setEpisode(req.episodes);
    };

    axiosDetail();
  }, []);

  return (
    <div style={{ marginTop: "5rem", paddingBottom: "3rem" }}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2>SEASON {props.seasonNumber}</h2>
          </div>
        </div>
      </div>

      {episode?.map((item) => (
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

"use client";
import { useEffect, useState } from "react";
import FavoriteItem from "./favoriteItem";
import FavoriteTv from "./favoriteTv";
import Footer from "./footer";
import Header from "./header";
import { IuserData } from "lastHomework/interfaces/Interfaceslog";
import { getAccount_id } from "lastHomework/utils/fetchService";

const AboutMe = () => {
  const [me, setMe] = useState<IuserData>();

  useEffect(() => {
    const fetchGetMe = async () => {
      try {
        const sessionId = localStorage.getItem("sessionId");
        const req = await getAccount_id(sessionId!);
        setMe(req);
      } catch (error) {}
    };
    fetchGetMe();
  }, []);

  return (
    <div>
      <section className="  container__card--detail movie__details--area">
        <div className="container__detail">
          <div className=" ">
            <div className="movie-details-img ">
              <img
                alt="profileImg"
                src={
                  me?.avatar.tmdb.avatar_path !== null
                    ? `https://image.tmdb.org/t/p/w342${me?.avatar.tmdb.avatar_path}`
                    : "https://us.123rf.com/450wm/hugok1000/hugok10001905/hugok1000190500198/123291745-ilustraci%C3%B3n-de-avatar-de-perfil-predeterminado-en-azul-y-blanco-sin-persona.jpg"
                }
                className="rounded-circle"
              />
            </div>
          </div>
          <div className="container__properties">
            <div className="movie-details-content">
              <h6>Hello</h6>
              <h2>{me?.username}</h2>
              <div className="banner-meta"></div>
              <div className="container__overview">
                <p>ID: {me?.id}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FavoriteItem />
      <FavoriteTv />
    </div>
  );
};

export default AboutMe;

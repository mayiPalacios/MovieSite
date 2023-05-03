"use client";

import Footer from "lastHomework/components/footer";
import Header from "lastHomework/components/header";
import FavoriteItem from "lastHomework/components/favoriteItem";
import Image from "next/image";
import FavoriteTv from "lastHomework/components/favoriteTv";

export default function Page({}) {
  return (
    <>
      <Header />
      <section className="nav-movie">
        <Image
          width={1920}
          height={500}
          layout="responsive"
          className="navbar__custom--IMG position-relative"
          src="https://themebeyond.com/html/movflx/img/bg/breadcrumb_bg.jpg"
          alt=""
        />
      </section>
      <h2>Favorites</h2>
      <FavoriteItem />
      <FavoriteTv />
      <Footer />
    </>
  );
}

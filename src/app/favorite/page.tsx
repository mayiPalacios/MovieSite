"use client";

import Footer from "lastHomework/components/footer";
import Header from "lastHomework/components/header";
import { useRouter } from "next/navigation";
import FavoriteItem from "lastHomework/components/favoriteItem";
import Image from "next/image";
import useAuth from "lastHomework/hooks/useAuth";
import { useEffect } from "react";
import FavoriteTv from "lastHomework/components/favoriteTv";

export default function Page({}) {
  const router = useRouter();
  const isLoggedIn = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  });

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
      <FavoriteItem />
      <FavoriteTv />
      <Footer />
    </>
  );
}

"use client";

import Footer from "lastHomework/components/footer";
import Header from "lastHomework/components/header";
import DetailsMovie from "lastHomework/components/detailsMovie";
import { useRouter } from "next/router";
import FavoriteItem from "lastHomework/components/favoriteItem";

export default function Page({ params }: { params: { detailsId: number } }) {
  let prop = params.detailsId;
  return (
    <>
      <Header />
      <FavoriteItem />
      <Footer />
    </>
  );
}

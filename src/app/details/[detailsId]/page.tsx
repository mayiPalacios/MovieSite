"use client";

import { FC } from "react";

import Footer from "lastHomework/components/footer";
import Header from "lastHomework/components/header";
import DetailsMovie from "lastHomework/components/detailsMovie";

export default function Page({ params }: { params: { detailsId: number } }) {
  let prop = params.detailsId;
  return (
    <>
      <Header />
      <DetailsMovie detailsId={prop} />
      <Footer />
    </>
  );
}

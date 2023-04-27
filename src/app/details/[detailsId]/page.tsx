"use client";

import { FC } from "react";
import { PageProps } from "../../../../.next/types/app/layout";
import Footer from "lastHomework/components/footer";
import Header from "lastHomework/components/header";
import DetailsMovie from "lastHomework/components/detailsMovie";
import { useRouter } from "next/router";

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

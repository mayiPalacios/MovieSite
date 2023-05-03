"use client";
import Footer from "lastHomework/components/footer";
import Header from "lastHomework/components/header";

import DetailsTv from "lastHomework/components/detailsTv";

export default function Page({ params }: { params: { detailsTvId: number } }) {
  let prop = params.detailsTvId;
  return (
    <>
      <Header />
      <DetailsTv detailsTvId={prop} />
      <Footer />
    </>
  );
}

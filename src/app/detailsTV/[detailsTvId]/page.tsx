"use client";

import { FC } from "react";

import Footer from "lastHomework/components/footer";
import Header from "lastHomework/components/header";
import { AuthProvider } from "lastHomework/contexts/AuthContext";
import DetailsTv from "lastHomework/components/detailsTv";

export default function Page({ params }: { params: { detailsTvId: number } }) {
  let prop = params.detailsTvId;
  return (
    <AuthProvider>
      <>
        <Header />
        <DetailsTv detailsTvId={prop} />
        <Footer />
      </>
    </AuthProvider>
  );
}

"use client";
import Movie from "lastHomework/components/movie";
import { FC } from "react";
import { PageProps } from "../../../.next/types/app/layout";
import Footer from "lastHomework/components/footer";
import Header from "lastHomework/components/header";
import { AuthProvider } from "lastHomework/contexts/AuthContext";

const page: FC<PageProps> = ({}) => {
  return (
    <AuthProvider>
      <>
        <Header />
        <Movie />
        <Footer />
      </>
    </AuthProvider>
  );
};

export default page;

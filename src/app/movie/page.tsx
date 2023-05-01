"use client";
import Movie from "lastHomework/components/movie";
import Footer from "lastHomework/components/footer";
import Header from "lastHomework/components/header";
import { AuthProvider } from "lastHomework/contexts/AuthContext";

const page = ({}) => {
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

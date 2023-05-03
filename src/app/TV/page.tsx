"use client";
import TvShow from "lastHomework/components/tvShow";
import Footer from "lastHomework/components/footer";
import Header from "lastHomework/components/header";

const page = ({}) => {
  return (
    <div data-testid="tv-container">
      <Header />
      <TvShow />
      <Footer />
    </div>
  );
};

export default page;

import TvShow from "lastHomework/components/tvShow";
import { FC } from "react";
import { PageProps } from "../../../.next/types/app/layout";
import Footer from "lastHomework/components/footer";
import Header from "lastHomework/components/header";

const page: FC<PageProps> = ({}) => {
  return (
    <>
      <Header />
      <TvShow />
      <Footer />
    </>
  );
};

export default page;

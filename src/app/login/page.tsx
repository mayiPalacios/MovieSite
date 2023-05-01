import { FC } from "react";
import { PageProps } from "../../../.next/types/app/layout";
import Footer from "lastHomework/components/footer";
import { useRouter } from "next/router";
import LoginPage from "lastHomework/components/login";

const page = ({}) => {
  return (
    <>
      <LoginPage />
      <Footer />
    </>
  );
};

export default page;

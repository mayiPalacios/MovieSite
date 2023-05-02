import AboutMe from "lastHomework/components/aboutMe";
import DetailPerson from "lastHomework/components/detailPerson";
import Footer from "lastHomework/components/footer";
import Header from "lastHomework/components/header";

const page = ({ params }: { params: { idPerson: number } }) => {
  let prop = params.idPerson;
  return (
    <>
      <Header />
      <DetailPerson idPerson={prop} />
      <Footer />
    </>
  );
};

export default page;

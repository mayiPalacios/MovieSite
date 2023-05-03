import AboutMe from "lastHomework/components/aboutMe";
import Footer from "lastHomework/components/footer";
import Header from "lastHomework/components/header";

const page = ({}) => {
  return (
    <div data-testid="meDetails-container">
      <Header />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default page;

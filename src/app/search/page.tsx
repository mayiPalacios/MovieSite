import Footer from "lastHomework/components/footer";
import Header from "lastHomework/components/header";
import SearchComponent from "lastHomework/components/searchComponent";
import { AuthProvider } from "lastHomework/contexts/AuthContext";

const page = ({}) => {
  return (
    <AuthProvider>
      <>
        <Header />
        <SearchComponent />
        <Footer />
      </>
    </AuthProvider>
  );
};

export default page;

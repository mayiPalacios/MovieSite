import Footer from "lastHomework/components/footer";
import Header from "lastHomework/components/header";
import SearchComponent from "lastHomework/components/searchComponent";
import { AuthProvider } from "lastHomework/contexts/AuthContext";

const page = ({}) => {
  return (
    <AuthProvider>
      <div data-testid="search-container">
        <Header />
        <SearchComponent />
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default page;

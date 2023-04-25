import { Inter } from "next/font/google";
import Movie from "lastHomework/components/movie";
import Header from "lastHomework/components/header";
import Footer from "lastHomework/components/footer";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <Movie />
      <Footer />
    </div>
  );
}

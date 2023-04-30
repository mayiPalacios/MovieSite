"use client";
import { Inter } from "next/font/google";
import Movie from "lastHomework/components/movie";
import Header from "lastHomework/components/header";
import Footer from "lastHomework/components/footer";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container__home">
      <Header />
      <div className="custom-container">
        <div className="">
          <div className="">
            <div className="banner-content">
              <h6>MayiMovies</h6>
              <h2>Unlimited Movie,TVs Shows,& More.</h2>
              <div>
                <button className="btn__start">
                  <a href="/movie">START</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

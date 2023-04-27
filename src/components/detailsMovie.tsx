"use client";
import { Imovie } from "lastHomework/interfaces/InterfacesMovie";
import Image from "next/image";
import { useState } from "react";

import { Footer, Header } from "react-bootstrap/lib/Modal";

interface Props {
  detailsId: number;
}

const DetailsMovie = (props: Props) => {
  const [detailMovie, setDmovie] = useState<Imovie[]>();

  return (
    <div>
      <section className="container__card--detail">
        <div className="row align-items-center position-relative">
          <div className="col-xl-3 col-lg-4"></div>
          <div className="col-xl-6 col-lg-8"></div>
        </div>
      </section>
    </div>
  );
};
export default DetailsMovie;

"use client";
import { Iepisodies } from "lastHomework/interfaces/InterfacesSeason";
import { getSeason } from "lastHomework/utils/fetchMethod";
import { useEffect, useState } from "react";

export interface Props {
  detailsTvId: number;
  seasonNumber: string;
}

const Detailseason = (props: Props) => {
  const [episode, setEpisode] = useState<Iepisodies[]>();

  useEffect(() => {
    const axiosDetail = async () => {
      const req = await getSeason(props.detailsTvId, props.seasonNumber);
      console.log(req);
    };

    axiosDetail();
  }, []);

  return <div>hola</div>;
};

export default Detailseason;

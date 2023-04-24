"use client";
import { ImovieResults } from "lastHomework/interfaces/InterfacesMovie";
import { get } from "./fetchInfo";

export const getMovies = async () => {
  try {
    const request = await get<ImovieResults>(
      "https://api.themoviedb.org/3/movie/popular?api_key=2c2a51168da517ee7a6b21e5a0f35561"
    );

    return request;
  } catch (error) {
    console.log(error);
  }
};

"use client";
import { Imovie, ImovieResults } from "lastHomework/interfaces/InterfacesMovie";
import { get } from "./fetchInfo";
import {
  ItvShow,
  ItvShowResults,
} from "lastHomework/interfaces/InterfacesTvShow";
import { Props } from "lastHomework/components/detailsMovie";
const apiKey = "2c2a51168da517ee7a6b21e5a0f35561";
const urlMovie = "https://api.themoviedb.org/3/discover/movie?api_key=";
const urlTV = "https://api.themoviedb.org/3/tv/popular?api_key=";

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

export const getFilterByCertification = async (certification: string) => {
  try {
    const request = await get<ImovieResults>(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&certification_country=US&certification=${certification}`
    );
    return request;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieGenres = async (idGenre: string) => {
  try {
    const req = await get<ImovieResults>(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${idGenre}`
    );
    return req;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieYear = async (year: string) => {
  try {
    const req = await get<ImovieResults>(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=${year}`
    );
    return req;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchElement = async (searchElement: string) => {
  try {
    const req = await get<ImovieResults>(
      `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${searchElement}`
    );
    return req;
  } catch (error) {
    console.log(error);
  }
};
/* */

export const getTvShow = async () => {
  const req = await get<ItvShowResults>(
    "https://api.themoviedb.org/3/tv/popular?api_key=2c2a51168da517ee7a6b21e5a0f35561"
  );

  return req;
};

export const getTvYear = async (year: string) => {
  const req = await get<ItvShowResults>(
    `https://api.themoviedb.org/3/discover/tv?api_key=2c2a51168da517ee7a6b21e5a0f35561&first_air_date_year=${year}`
  );
  return req;
};

export const getTvGenres = async (idGenre: string) => {
  const req = await get<ItvShowResults>(
    `https://api.themoviedb.org/3/discover/tv?api_key=2c2a51168da517ee7a6b21e5a0f35561&with_genres=${idGenre}`
  );
  return req;
};

export const getSearchTv = async (searchElement: string) => {
  const req = await get<ItvShowResults>(
    `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&query=${searchElement}`
  );
  return req;
};

export const getFilterByCertificationTv = async (certification: string) => {
  const request = await get<ItvShowResults>(
    `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&certification=${certification}`
  );
  return request;
};

export const getDetailMovie = async (idDetailMovie: number) => {
  const req = await get<Imovie>(
    `https://api.themoviedb.org/3/movie/${idDetailMovie}?api_key=2c2a51168da517ee7a6b21e5a0f35561`
  );
  return req;
};

export const getSimilarMovies = async (idDetailMovie: number) => {
  const req = await get<ImovieResults>(
    `https://api.themoviedb.org/3/movie/${idDetailMovie}/similar?api_key=2c2a51168da517ee7a6b21e5a0f35561`
  );
  return req.data.results;
};

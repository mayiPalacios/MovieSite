import { ImovieResults } from "lastHomework/interfaces/InterfacesMovie";

export const GET_MOVIE_REQUEST = "GET_MOVIE_REQUEST";
export const GET_MOVIE_SUCCESS = "GET_MOVIE_SUCCESS";
export const GET_MOVIE_FAILURE = "GET_MOVIE_FAILURE";

export interface GetMovieRequestAction {
  type: typeof GET_MOVIE_REQUEST;
}

export interface GetMovieSuccessAction {
  type: typeof GET_MOVIE_SUCCESS;
  payload: ImovieResults;
}

export interface GetMovieFailureAction {
  type: typeof GET_MOVIE_FAILURE;
  payload: Error;
}

export type MovieActionTypes =
  | GetMovieRequestAction
  | GetMovieSuccessAction
  | GetMovieFailureAction;

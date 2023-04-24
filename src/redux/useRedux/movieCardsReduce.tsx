import { Reducer } from "redux";
import { Imovie, ImovieResults } from "lastHomework/interfaces/InterfacesMovie";
import {
  GET_MOVIE_FAILURE,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  MovieActionTypes,
} from "../actionsMethods/getMovieAction";

export interface ImovieState {
  loading: boolean;
  movies: ImovieResults | null;
  error: Error | null;
}

const initialState: ImovieState = {
  loading: false,
  movies: null,
  error: null,
};

export function movieReducer(state = initialState, action: MovieActionTypes) {
  switch (action.type) {
    case GET_MOVIE_REQUEST:
      return { ...state, loading: true };
    case GET_MOVIE_SUCCESS:
      return { ...state, loading: false, movies: action.payload };
    case GET_MOVIE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

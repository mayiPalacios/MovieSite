import { movieReducer } from "./movieCardsReduce";
import { combineReducers } from "redux";

const Reducers = combineReducers({
  movies: movieReducer,
});

export default Reducers;
export type State = ReturnType<typeof Reducers>;

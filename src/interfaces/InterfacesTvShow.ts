export interface ItvShow {
  backdrop_path: string;
  first_air_date: string;
  genres?: [{ id: number; name: string }];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  number_of_seasons: number;
}

export interface ItvShowResults {
  page: number;
  results: ItvShow[];
}

export interface Iepisodies {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
}

export interface IepisodiesList {
  episodes: Iepisodies[];
}

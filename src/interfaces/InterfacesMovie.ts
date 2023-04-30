export interface Imovie {
  adult: boolean;
  genre_ids: number[];
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  runtime: number;
  genres?: [{ id: number; name: string }];
  title: string;
}

export interface ImovieResults {
  page: number;
  results: Imovie[];
}

import { Imovie } from "./InterfacesMovie";
import { ItvShow } from "./InterfacesTvShow";

export interface Isearch {
  id: number;
  media_type: string;
  original_title: string;
  title: string;
  name: string;
  overview: string;
  poster_path: string | null;
  vote_average: number;
  release_date: string | null;
  first_air_date: string | null;
}

export interface IsearchResults {
  page: number;
  results: Isearch[];
}

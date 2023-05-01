export interface Iepisodies {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  profile_path: string;
}

export interface IepisodiesList {
  episodes: Iepisodies[];
}

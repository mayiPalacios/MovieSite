export interface Icast {
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
}

export interface Icrew {
  id: number;
  name: string;
  original_name: string;
  profile_path: string | null;
  department: string;
  job: string;
}

export interface Icredits {
  cast: Icast[];
  crew: Icrew[];
}

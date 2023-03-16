interface IGenre {
  id: number;
  name: string;
}

export interface IMovie {
  backdrop_path: string;
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  user_rate?: number;
}

export interface IMoreMovie extends IMovie {
  adult: boolean;
  genre_ids: number[];
  genres: IGenre[];
  tagline: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  video: false;
  vote_count: number;
}

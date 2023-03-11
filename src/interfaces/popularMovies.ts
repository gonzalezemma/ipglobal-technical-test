import { IMovie } from "@interfaces/movie";

export interface IPopularMoviesResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

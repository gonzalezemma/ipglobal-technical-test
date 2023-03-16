import { IMoreMovie } from "@interfaces/movie";

export interface IPopularMoviesResponse {
  page: number;
  results: IMoreMovie[];
  total_pages: number;
  total_results: number;
}

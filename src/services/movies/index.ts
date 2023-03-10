import { API_URL_GET_POPULAR_MOVIES } from "@constants/env";
import { IMovie } from "@interfaces/movie";
import apiInstance from "services";

export const getPopularMovies = async (): Promise<IMovie[]> => {
  const { data } = await apiInstance.get(API_URL_GET_POPULAR_MOVIES);

  return data.results;
};

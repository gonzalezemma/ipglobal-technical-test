import { API_URL_GET_POPULAR_MOVIES } from "@constants/env";
import apiInstance from "services";

export const getPopularMovies = async () => {
  const { data: results } = await apiInstance.get(API_URL_GET_POPULAR_MOVIES);

  return results;
};

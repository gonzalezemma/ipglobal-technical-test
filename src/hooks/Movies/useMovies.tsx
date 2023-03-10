import { IMovie } from "@interfaces/movie";
import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { getPopularMovies } from "services/movies";

const useMovies = () => {
  const { isLoading, data } = useQuery<IMovie[]>("movies", getPopularMovies);

  return !isLoading ? data : [];
};

export default useMovies;

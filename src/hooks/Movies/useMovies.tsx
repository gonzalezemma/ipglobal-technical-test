import { IMovie } from "@interfaces/movie";
import { useGetPopularMoviesQuery } from "@store/api/movies";

const useMovies = () => {
  const { isLoading, data, error } = useGetPopularMoviesQuery();
  console.log("🚀 ~ file: useMovies.tsx:6 ~ useMovies ~ data:", data);

  return !isLoading && data ? data.results : [];
};

export default useMovies;

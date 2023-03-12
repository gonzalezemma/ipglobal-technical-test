import { useGetPopularMoviesQuery } from "@store/api/movies";

const useMovies = (page = 1) => {
  const { isLoading, data, error, isSuccess } = useGetPopularMoviesQuery(page);

  if (!isLoading && isSuccess) {
    return data.results;
  }
  if (error) {
    console.log("🚀 ~ file: useMovies.tsx:10 ~ useMovies ~ error:", error);
  }

  return [];
};

export default useMovies;

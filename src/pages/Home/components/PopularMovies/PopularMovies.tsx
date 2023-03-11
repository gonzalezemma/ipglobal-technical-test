import MovieList from "@components/MovieList";
import useMovies from "@hooks/Movies/useMovies";

const PopularMovies = () => {
  const movies = useMovies();
  return <MovieList movies={movies} />;
};

export default PopularMovies;

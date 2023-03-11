import MovieList from "@components/MovieList";
import useMovies from "@hooks/Movies/useMovies";

const PopularMovies = () => {
  const movies = useMovies();
  return (
    <MovieList
      title="Películas más populares"
      variantTitle="h5"
      movies={movies}
    />
  );
};

export default PopularMovies;

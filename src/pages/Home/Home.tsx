import CarouselMovies from "@components/CarouselMovies";
import useMovies from "@hooks/Movies/useMovies";
import PopularMovies from "./components/PopularMovies";

const Home = () => {
  const movies = useMovies();
  return (
    <>
      <CarouselMovies movies={movies} />
      <PopularMovies />
    </>
  );
};

export default Home;

import CarouselMovies from "@components/CarouselMovies";
import useMovies from "@hooks/Movies/useMovies";

const Home = () => {
  const data = useMovies();
  return (
    <>
      <CarouselMovies movies={data} />
    </>
  );
};

export default Home;

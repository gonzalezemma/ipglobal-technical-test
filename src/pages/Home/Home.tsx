import Carrousel from "@components/Carrousel";
import useMovies from "@hooks/Movies/useMovies";
import { IMovie } from "@interfaces/movie";
import { useQuery } from "react-query";
import { getPopularMovies } from "services/movies";

const Home = () => {
  const data = useMovies();
  return (
    <>
      <Carrousel movies={data} />
    </>
  );
};

export default Home;

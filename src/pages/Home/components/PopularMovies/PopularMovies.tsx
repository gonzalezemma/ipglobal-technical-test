import Slider from "react-slick";
import ListMovies from "@components/ListMovies";
import Movie from "@components/Movie";
import settings from "utils/settings";
import { useGetPopularMoviesQuery } from "@store/api/movies";

const PopularMovies = () => {
  const { isLoading, data, error, isSuccess } = useGetPopularMoviesQuery(1);
  return (
    <ListMovies title="Películas más populares" variantTitle="h5">
      <Slider {...settings}>
        {data?.results.map(({ title, poster_path }) => (
          <Movie key={title} title={title} poster={poster_path} />
        ))}
      </Slider>
    </ListMovies>
  );
};

export default PopularMovies;

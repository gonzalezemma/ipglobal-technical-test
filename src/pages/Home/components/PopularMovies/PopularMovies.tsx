import Slider from "react-slick";
import ListMovies from "@components/ListMovies";
import useMovies from "@hooks/Movies/useMovies";
import settings from "utils/settings";
import Movie from "@components/Movie";

const PopularMovies = () => {
  const movies = useMovies();
  return (
    <ListMovies title="Películas más populares" variantTitle="h5">
      <Slider {...settings}>
        {movies.map(({ title, poster_path }) => (
          <Movie title={title} poster={poster_path} />
        ))}
      </Slider>
    </ListMovies>
  );
};

export default PopularMovies;

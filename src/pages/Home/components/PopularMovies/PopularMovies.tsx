import Slider from "react-slick";
import { CircularProgress } from "@mui/material";
import ListMovies from "@components/ListMovies";
import Movie from "@components/Movie";
import settings from "utils/settings";
import { useGetPopularMoviesQuery } from "@store/api/movies";
import { IMovie } from "@interfaces/movie";

const PopularMovies = ({ movies }: { movies: IMovie[] }) => (
  <ListMovies title="Películas más populares" variantTitle="h5">
    <Slider {...settings}>
      {movies.map(({ title, poster_path }) => (
        <Movie key={title} title={title} poster={poster_path} />
      ))}
    </Slider>
  </ListMovies>
);

export default PopularMovies;

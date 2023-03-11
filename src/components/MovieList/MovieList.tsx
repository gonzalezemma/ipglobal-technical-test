import Slider from "react-slick";
import Movie from "@components/Movie";
import { IMovie } from "@interfaces/movie";
import settings from "./settings";
import styles from "./MovieList.module.css";
import { Typography } from "@mui/material";

interface IMovieList {
  title: string;
  variantTitle:
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "overline"
    | undefined;
  movies: IMovie[];
}

const MovieList = ({ title, variantTitle, movies }: IMovieList) => {
  return (
    <div className={styles.list}>
      <Typography mb={2} ml={2} fontWeight={"bold"} variant={variantTitle}>
        {title}
      </Typography>
      <Slider {...settings}>
        {movies.map(({ title, poster_path }) => (
          <Movie title={title} poster={poster_path} />
        ))}
      </Slider>
    </div>
  );
};

export default MovieList;

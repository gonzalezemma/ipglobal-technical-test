import Slider from "react-slick";
import { CircularProgress } from "@mui/material";
import ListMovies from "@components/ListMovies";
import PreviewMovie from "@components/PreviewMovie";
import settings from "utils/settings";
import { IMovie } from "@interfaces/movie";

const PopularMovies = ({ movies }: { movies: IMovie[] }) => (
  <ListMovies title="Películas más populares" variantTitle="h5">
    <Slider {...settings}>
      {movies.map(({ title, poster_path, release_date, vote_average }) => (
        <PreviewMovie
          key={title}
          title={title}
          poster={poster_path}
          releaseDate={release_date}
          voteAverage={vote_average}
        />
      ))}
    </Slider>
  </ListMovies>
);

export default PopularMovies;

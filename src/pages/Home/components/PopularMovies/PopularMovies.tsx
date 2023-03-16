import Slider from "react-slick";
import ListMovies from "@components/ListMovies";
import PreviewMovie from "@components/PreviewMovie";
import { IMovie } from "@interfaces/movie";
import { slideSettings } from "utils/sliderSettings";

const PopularMovies = ({ movies }: { movies: IMovie[] }) => (
  <ListMovies title="Películas más populares" variantTitle="h5">
    <Slider {...slideSettings}>
      {movies.map(({ id, title, poster_path, release_date, vote_average }) => (
        <PreviewMovie
          id={id}
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

import Slider from "react-slick";
import { Box } from "@mui/system";
import { API_URL_IMAGE } from "@constants/env";
import { IMoreMovie, IMovie } from "@interfaces/movie";
import { carouselSettings } from "utils/sliderSettings";
import styles from "./CarouselMovies.module.css";
import { Typography } from "@mui/material";

interface ICarouselMovies {
  movies: IMoreMovie[];
}

const CarouselMovies = ({ movies }: ICarouselMovies) => {
  return (
    <Slider {...carouselSettings}>
      {movies.map(({ id, title, backdrop_path, overview }) => (
        <Box key={id} className={styles.movie}>
          <img src={`${API_URL_IMAGE}${backdrop_path}`} />

          <Box className={styles.movieInfo}>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                textShadow: "5px 3px 10px #000000cc",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                textShadow: "5px 3px 10px #000000cc",
              }}
            >
              {`${overview.slice(0, 140)}...`}
            </Typography>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default CarouselMovies;

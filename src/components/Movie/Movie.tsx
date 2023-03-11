import { API_URL_IMAGE } from "@constants/env";
import { Box } from "@mui/material";
import styles from "./Movie.module.css";

interface IMovieProps {
  title: string;
  poster: string;
}

const Movie = ({ title, poster }: IMovieProps) => {
  return (
    <Box className={styles.movie}>
      <img src={`${API_URL_IMAGE}${poster}`} alt={title} />
    </Box>
  );
};

export default Movie;

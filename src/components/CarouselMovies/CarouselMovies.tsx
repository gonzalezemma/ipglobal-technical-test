import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { IMovie } from "@interfaces/movie";
import styles from "./CarouselMovies.module.css";
import { API_URL_IMAGE } from "@constants/env";

interface ICarrousel {
  movies: IMovie[];
}

enum EHeights {
  DESKTOP = "40vw",
  TABLET = "90vw",
}

const CarouselMovies = ({ movies }: ICarrousel) => {
  const [height, setHeight] = useState(EHeights.DESKTOP);

  window.addEventListener("resize", () => {
    window.innerWidth < 800
      ? setHeight(EHeights.TABLET)
      : setHeight(EHeights.DESKTOP);
  });

  return (
    <Carousel interval={3000} duration={2000} height={height}>
      {movies?.map((movie) => (
        <div key={movie.id} className={styles.movie}>
          <span className={styles.title}>{movie.title}</span>
          <img src={`${API_URL_IMAGE}${movie.backdrop_path}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselMovies;

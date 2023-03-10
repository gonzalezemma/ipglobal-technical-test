import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { IMovie } from "@interfaces/movie";
import { API_URL_IMAGE } from "@constants/env";
import styles from "./Carrousel.module.css";
import Carousel from "react-material-ui-carousel";
import { Button, Paper } from "@mui/material";
interface ICarrousel {
  movies: IMovie[] | undefined;
}

const Carrousel = ({ movies }: ICarrousel) => {
  return (
    <Carousel
      indicatorContainerProps={{
        style: {
          zIndex: 1,
          marginTop: "-15rem",
          paddingBottom: "3rem",
          position: "relative",
        },
      }}
    >
      {movies?.map((movie, i) => (
        <div className={styles.container}>
          <h2 className={styles.title}>{movie.title}</h2>
          {/* 
          <p>{movie.overview}</p> */}
          <img
            className={styles.poster}
            src={`${API_URL_IMAGE}${movie.backdrop_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Carrousel;

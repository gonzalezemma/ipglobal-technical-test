import Slider from "react-slick";
import { ReactElement } from "react";
import { Grid, Typography } from "@mui/material";
import styles from "./ListMovies.module.css";
import { IMoreMovie } from "@interfaces/movie";
import PreviewMovie from "@components/PreviewMovie";
import { slideSettings } from "utils/sliderSettings";
import { ETypeList } from "@constants/typeList";

interface IListMovies {
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
  movies: IMoreMovie[];
  type: ETypeList;
}
const renderComponent = {
  [ETypeList.SLIDER]: (children: JSX.Element[]) => (
    <Slider {...slideSettings}>{children}</Slider>
  ),
  [ETypeList.GRID]: (children: JSX.Element[]) => (
    <Grid container columns={{ xs: 4, sm: 8, md: 12, lg: 5 }}>
      {children}
    </Grid>
  ),
};

const ListMovies = ({ title, variantTitle, movies, type }: IListMovies) => {
  return (
    <div className={styles.list}>
      <Typography mb={1} ml={2} fontWeight={"bold"} variant={variantTitle}>
        {title}
      </Typography>
      {renderComponent[type](
        movies.map(
          ({
            id,
            title,
            poster_path,
            release_date,
            vote_average,
          }: IMoreMovie) => (
            <Grid key={id} item xs={2} sm={4} md={3} lg={1}>
              <PreviewMovie
                id={id}
                key={id}
                title={title}
                poster={poster_path}
                releaseDate={release_date}
                voteAverage={vote_average}
              />
            </Grid>
          )
        )
      )}
    </div>
  );
};

export default ListMovies;

import Slider from "react-slick";
import { ReactElement } from "react";
import { Typography } from "@mui/material";
import styles from "./ListMovies.module.css";

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
  children: ReactElement;
}

const ListMovies = ({ title, variantTitle, children }: IListMovies) => {
  return (
    <div className={styles.list}>
      <Typography mb={1} ml={1} fontWeight={"bold"} variant={variantTitle}>
        {title}
      </Typography>
      {children}
    </div>
  );
};

export default ListMovies;

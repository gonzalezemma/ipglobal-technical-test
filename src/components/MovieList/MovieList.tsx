import Movie from "@components/Movie";
import { useState } from "react";
import { IMovie } from "@interfaces/movie";
import styles from "./MovieList.module.css";
import { Button } from "@mui/material";

interface IMovieList {
  movies: IMovie[];
}

const MovieList = ({ movies }: IMovieList) => {
  const [page, setPage] = useState(0);
  const [offset, setOffset] = useState(7);

  const prevPage = () => {
    setPage(page - 7);
    setOffset(offset - 7);
  };

  const nextPage = () => {
    setPage(offset);
    setOffset(offset + 7);
  };

  return (
    <div className={styles.list}>
      <Button onClick={() => prevPage()} />
      {movies.slice(page, offset).map(({ title, poster_path }) => (
        <Movie title={title} poster={poster_path} />
      ))}
      <Button onClick={() => nextPage()} />
    </div>
  );
};

export default MovieList;

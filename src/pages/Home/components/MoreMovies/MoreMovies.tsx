import { useState } from "react";
import { Button, Grid } from "@mui/material";
import ListMovies from "@components/ListMovies";
import Movie from "@components/Movie";
import { useGetPopularMoviesQuery } from "@store/api/movies";

const MoreMovies = () => {
  const [page, setPage] = useState(2);
  const { isLoading, data, error, isSuccess } = useGetPopularMoviesQuery(page);
  return (
    <ListMovies title="Más Películas" variantTitle="h4">
      <>
        <Grid container columns={{ xs: 4, sm: 8, md: 12, lg: 5 }}>
          {data?.results.map(({ id, title, poster_path }) => (
            <Grid key={id} item xs={2} sm={4} md={3} lg={1}>
              <Movie title={title} poster={poster_path} />
            </Grid>
          ))}
        </Grid>
        <Button onClick={() => setPage((prev) => prev + 1)}>v</Button>
      </>
    </ListMovies>
  );
};

export default MoreMovies;

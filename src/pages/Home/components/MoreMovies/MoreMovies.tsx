import { Grid } from "@mui/material";
import ListMovies from "@components/ListMovies";
import Movie from "@components/Movie";
import useMovies from "@hooks/Movies/useMovies";

const MoreMovies = () => {
  const movies = useMovies();
  return (
    <ListMovies title="Más Películas" variantTitle="h4">
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
        {movies.map(({ id, title, poster_path }) => (
          <Grid key={id} item xs={2} sm={2} md={2}>
            <Movie title={title} poster={poster_path} />
          </Grid>
        ))}
      </Grid>
    </ListMovies>
  );
};

export default MoreMovies;

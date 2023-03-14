import { Box, CircularProgress } from "@mui/material";
import CarouselMovies from "@components/CarouselMovies";
import ShowMessage from "@components/ShowMessage";
import MoreMovies from "./components/MoreMovies";
import PopularMovies from "./components/PopularMovies";
import { useGetPopularMoviesQuery } from "@store/api/movies";
import useShowError from "@hooks/useShowError";
import Loading from "@components/Loading";

const Home = () => {
  const { isLoading, isSuccess, data, error, isError } =
    useGetPopularMoviesQuery(1);

  if (isLoading) {
    return <Loading />;
  }

  if (isError && error) {
    const errorData = useShowError(error);
    return (
      <>
        {errorData && (
          <ShowMessage
            status={errorData.status}
            description={errorData.message}
          />
        )}
      </>
    );
  }

  return (
    <>
      {isSuccess && data && (
        <>
          <CarouselMovies movies={data.results} />
          <PopularMovies movies={data.results} />
          <MoreMovies />
        </>
      )}
    </>
  );
};

export default Home;

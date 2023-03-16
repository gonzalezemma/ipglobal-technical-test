import { SyntheticEvent } from "react";
import { moviesApi, useRateMovieMutation } from "@store/api/movies";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ShowMessage from "@components/ShowMessage";
import useShowError from "@hooks/useShowError";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { addMovieToList } from "@store/slices/user";

interface IChangeRate {
  e: SyntheticEvent<Element, Event>;
  rate: number | null;
}
const RateMovie = ({
  movieId,
  guestId,
}: {
  movieId: number;
  guestId: string;
}) => {
  const { myMovieList } = useAppSelector((state) => state.user);
  const ratedMovie = myMovieList.find((movie) => movie.id === movieId) ?? false;
  const movie = moviesApi.endpoints.getMovie.useQuery(movieId).data;
  const [rateMovie, { isError, error }] = useRateMovieMutation();
  const dispatch = useAppDispatch();

  const handleRateMovie = async ({ e, rate }: IChangeRate) => {
    e?.preventDefault;
    const response = await rateMovie({
      rate,
      movieId,
      guestId,
    }).unwrap();

    if (response.success && movie) {
      dispatch(
        addMovieToList({
          id: movieId,
          title: movie.title,
          vote_average: movie.vote_average,
          release_date: movie.release_date,
          backdrop_path: movie.backdrop_path,
          poster_path: movie.poster_path,
          user_rate: rate ?? 0,
        })
      );
    }
  };

  if (isError && error) {
    const errorData = useShowError(error);
    return (
      <>
        {errorData && (
          <ShowMessage
            status={errorData.status}
            description={errorData.message}
            minHeight={50}
          />
        )}
      </>
    );
  }

  return (
    <Rating
      value={!ratedMovie ? 0 : ratedMovie.user_rate}
      max={10}
      precision={0.5}
      size="large"
      emptyIcon={<StarIcon fontSize="inherit" />}
      onChange={(e, value) => handleRateMovie({ e, rate: value })}
      readOnly={!!ratedMovie}
    />
  );
};
export default RateMovie;

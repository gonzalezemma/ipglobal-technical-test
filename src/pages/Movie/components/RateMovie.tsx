import { SyntheticEvent } from "react";
import { useRateMovieMutation } from "@store/api/movies";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ShowMessage from "@components/ShowMessage";
import useShowError from "@hooks/useShowError";

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
  const [rateMovie, { isError, error }] = useRateMovieMutation();

  const handleRateMovie = async ({ e, rate }: IChangeRate) => {
    e?.preventDefault;

    await rateMovie({
      rate,
      movieId,
      guestId,
    }).unwrap();
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
      defaultValue={0}
      max={10}
      precision={0.5}
      size="large"
      emptyIcon={<StarIcon fontSize="inherit" />}
      onChange={(e, value) => handleRateMovie({ e, rate: value })}
    />
  );
};
export default RateMovie;

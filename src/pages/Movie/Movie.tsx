import { useParams } from "react-router-dom";
import { useGetMovieQuery } from "@store/api/movies";
import { Box, Grid, Rating, Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import Loading from "@components/Loading";
import ShowMessage from "@components/ShowMessage";
import useShowError from "@hooks/useShowError";
import { API_URL_IMAGE } from "@constants/env";
import RateMovie from "./components/RateMovie";
import { useAppSelector } from "@store/hooks";

const Movie = () => {
  const { id } = useParams() as { id: string };
  const { guestId } = useAppSelector((state) => state.user);
  const movieId = parseInt(id);
  const { isLoading, isSuccess, data, error, isError } =
    useGetMovieQuery(movieId);

  const getImage = (path: string) => `${API_URL_IMAGE}${path}`;

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
        <Box
          sx={{
            position: "relative",
            "& .backgroundImg": {
              width: "100%",
              opacity: 0.3,
            },
          }}
        >
          <img
            className="backgroundImg"
            src={`${getImage(data.backdrop_path)}`}
            alt="background"
          />
          <Grid
            container
            gap={8}
            position="absolute"
            justifyContent="center"
            columns={{ xs: 1, sm: 2, md: 8, lg: 12 }}
            sx={{
              top: 0,
              left: 0,
              padding: "6rem",
            }}
          >
            <Grid
              item
              xs={1}
              sm={2}
              md={4}
              lg={3}
              sx={{
                "& img": {
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: "3px 3px 5px 0px #000000bf",
                },
              }}
            >
              <img src={getImage(data.poster_path)} alt="poster" />
            </Grid>
            <Grid item xs={1} sm={2} md={6} lg={6}>
              <Box display="flex" flexDirection="column" gap={6}>
                <div>
                  <Typography variant="h4" fontWeight="bold">
                    {`${data.title} (${data.release_date.slice(0, 4)})`}
                  </Typography>
                  <Box display="flex" gap={2} alignItems="center">
                    <Typography variant="subtitle2" fontStyle="italic">
                      {data.release_date}
                    </Typography>
                    •
                    {data.genres?.map(({ id, name }) => (
                      <Typography key={id} variant="subtitle2">
                        {name}
                      </Typography>
                    ))}
                  </Box>
                  <Rating
                    value={data.vote_average / 2}
                    precision={0.1}
                    readOnly
                  />
                  <Typography variant="subtitle1" fontWeight="bold">
                    Rrating: {data.popularity.toFixed()}
                  </Typography>
                </div>

                <div>
                  <Typography variant="subtitle1" fontStyle="italic">
                    {data.tagline}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold">
                    Overview
                  </Typography>
                  <Typography variant="subtitle2">{data.overview}</Typography>
                </div>

                {guestId && (
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap={2}
                    width="30rem"
                    sx={{
                      border: "2px solid",
                      borderRadius: "1rem",
                      padding: "1rem",
                      backgroundColor: "background.default",
                    }}
                  >
                    <Box display="flex" alignItems="center" gap={1}>
                      <Typography variant="h6" fontWeight="bold">
                        Rate this movie
                      </Typography>
                      <StarRateIcon />
                    </Box>
                    <RateMovie movieId={data.id} guestId={guestId} />
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default Movie;

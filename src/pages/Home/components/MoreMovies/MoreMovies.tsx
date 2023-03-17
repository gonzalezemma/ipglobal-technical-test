import { useState } from "react";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListMovies from "@components/ListMovies";
import ShowMessage from "@components/ShowMessage";
import Loading from "@components/Loading";
import useShowError from "@hooks/useShowError";
import { useGetPopularMoviesQuery } from "@store/api/movies";
import { ETypeList } from "@constants/typeList";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";

const MoreMovies = () => {
  const [page, setPage] = useState(2);
  const { isLoading, data, error, isError } = useGetPopularMoviesQuery(page);

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
      {data && (
        <Box display="flex" flexDirection="column">
          <ListMovies
            title="More Movies"
            variantTitle="h4"
            movies={data.results}
            type={ETypeList.GRID}
          />
          <Button
            variant="contained"
            onClick={() => setPage((prev) => prev + 1)}
            sx={{
              ml: "20rem",
              mr: "20rem",
              mb: "5rem",
            }}
          >
            <Typography>Get more movies</Typography>
            <KeyboardArrowDownIcon />
          </Button>
        </Box>
      )}
    </>
  );
};

export default MoreMovies;

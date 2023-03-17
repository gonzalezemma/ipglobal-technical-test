import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ShowMessage from "@components/ShowMessage";
import ListMovies from "@components/ListMovies";
import useShowError from "@hooks/useShowError";
import { moviesApi } from "@store/api/movies";
import { useAppSelector } from "@store/hooks";
import { ETypeList } from "@constants/typeList";

const Search = () => {
  const { key = "" } = useParams();

  const { data, isSuccess, isError, error } = useAppSelector(
    moviesApi.endpoints.searchMovie.select(key)
  );

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
    <Box mt={8}>
      {data && isSuccess && (
        <>
          <ListMovies
            title={`Movies with ${key}`}
            variantTitle="h4"
            movies={data.results}
            type={ETypeList.GRID}
          />
        </>
      )}
    </Box>
  );
};

export default Search;

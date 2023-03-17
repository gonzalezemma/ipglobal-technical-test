import { useState } from "react";
import Button from "@mui/material/Button";
import ListMovies from "@components/ListMovies";
import ShowMessage from "@components/ShowMessage";
import Loading from "@components/Loading";
import useShowError from "@hooks/useShowError";
import { useGetPopularMoviesQuery } from "@store/api/movies";
import { ETypeList } from "@constants/typeList";

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
        <>
          <ListMovies
            title="More Movies"
            variantTitle="h4"
            movies={data.results}
            type={ETypeList.GRID}
          />
          <Button onClick={() => setPage((prev) => prev + 1)}>v</Button>
        </>
      )}
    </>
  );
};

export default MoreMovies;

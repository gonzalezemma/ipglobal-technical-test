import ListMovies from "@components/ListMovies";
import { ETypeList } from "@constants/typeList";
import { Box } from "@mui/material";
import { useAppSelector } from "@store/hooks";

const MyList = () => {
  const { myMovieList } = useAppSelector((state) => state.user);

  return (
    <Box mt={8}>
      <ListMovies
        title="My rated movie list"
        variantTitle="h5"
        movies={myMovieList}
        type={ETypeList.GRID}
      />
    </Box>
  );
};

export default MyList;

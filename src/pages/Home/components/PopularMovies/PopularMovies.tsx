import ListMovies from "@components/ListMovies";
import { IMovie } from "@interfaces/movie";
import { ETypeList } from "@constants/typeList";

const PopularMovies = ({ movies }: { movies: IMovie[] }) => (
  <ListMovies
    title="Popular Movies"
    variantTitle="h5"
    movies={movies}
    type={ETypeList.SLIDER}
  />
);

export default PopularMovies;

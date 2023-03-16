import Slider from "react-slick";
import ListMovies from "@components/ListMovies";
import PreviewMovie from "@components/PreviewMovie";
import { IMoreMovie, IMovie } from "@interfaces/movie";
import { ETypeList } from "@constants/typeList";

const PopularMovies = ({ movies }: { movies: IMoreMovie[] }) => (
  <ListMovies
    title="Popular Movies"
    variantTitle="h5"
    movies={movies}
    type={ETypeList.SLIDER}
  />
);

export default PopularMovies;

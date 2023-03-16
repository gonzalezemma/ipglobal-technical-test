import { IMovie } from "@interfaces/movie";
import { UserState } from "../store/slices/user";

export const GUEST_ID = "guestId";
export const EXPIRES_AT = "expiresAt";
export const THEME = "theme";
export const MY_MOVIE_LIST = "myMovieList";

const parseMovieList = () =>
  JSON.parse(localStorage.getItem(MY_MOVIE_LIST) ?? "[]");

export const getLocalUser = () => {
  return {
    guestId: localStorage.getItem(GUEST_ID),
    expiresAt: localStorage.getItem(EXPIRES_AT),
    theme: localStorage.getItem(THEME),
    myMovieList: parseMovieList(),
  };
};

export const setLocalUser = ({
  guestId,
  expiresAt,
  theme,
  myMovieList,
}: {
  guestId: string;
  expiresAt: string;
  theme: string;
  myMovieList: IMovie[];
}) => {
  localStorage.setItem(GUEST_ID, guestId);
  localStorage.setItem(EXPIRES_AT, expiresAt);
  localStorage.setItem(THEME, theme);
  localStorage.setItem(MY_MOVIE_LIST, JSON.stringify(myMovieList));
};

export const setMovieToLocalList = (movie: IMovie) => {
  const myMovieList = parseMovieList();

  localStorage.setItem(
    MY_MOVIE_LIST,
    JSON.stringify(myMovieList.concat(movie))
  );
};

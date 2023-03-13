import { API_URL, API_URL_GET_POPULAR_MOVIES } from "./../../src/constants/env";
import { rest } from "msw";
import popularMovies from "../data/movies/popularMovies.json";

export const movieHandler = [
  rest.get(`${API_URL}${API_URL_GET_POPULAR_MOVIES}`, (req, res, ctx) => {
    return res(ctx.json(popularMovies));
  }),
];

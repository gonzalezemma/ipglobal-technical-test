import {
  API_URL,
  API_URL_GET_POPULAR_MOVIES,
  API_URL_MOVIE,
} from "./../../src/constants/env";
import { rest } from "msw";
import { moviesToTest } from "../data/movies/movies";

export const movieHandler = [
  rest.get(`${API_URL}${API_URL_GET_POPULAR_MOVIES}`, (req, res, ctx) => {
    return res(ctx.json(moviesToTest));
  }),
  rest.get(`${API_URL}${API_URL_MOVIE}/1077280`, (req, res, ctx) => {
    return res(ctx.json(moviesToTest.results[1]));
  }),
];

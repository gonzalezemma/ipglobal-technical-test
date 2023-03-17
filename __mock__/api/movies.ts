import {
  API_URL,
  API_URL_GET_POPULAR_MOVIES,
  API_URL_MOVIE,
  API_URL_RATE_MOVIE,
  API_URL_SEARCH_MOVIES,
} from "./../../src/constants/env";
import { rest } from "msw";
import { moviesToTest } from "../data/movies";

export const movieHandler = [
  rest.get(`${API_URL}${API_URL_GET_POPULAR_MOVIES}`, (req, res, ctx) => {
    return res(ctx.json(moviesToTest));
  }),
  rest.get(`${API_URL}${API_URL_MOVIE}/1077280`, (req, res, ctx) => {
    return res(ctx.json(moviesToTest.results[1]));
  }),
  rest.get(`${API_URL}${API_URL_SEARCH_MOVIES}`, (req, res, ctx) => {
    return res(ctx.json(moviesToTest));
  }),
  rest.post(
    `${API_URL}${API_URL_RATE_MOVIE}1077280/rating`,
    (req, res, ctx) => {
      return res(ctx.json({ success: true }));
    }
  ),
];

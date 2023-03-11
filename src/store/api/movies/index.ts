import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY, API_URL, API_URL_GET_POPULAR_MOVIES } from "@constants/env";
import { IPopularMoviesResponse } from "@interfaces/popularMovies";
import { IMovie } from "@interfaces/movie";

const getKeyUrl = (URL: string) => `${URL}?api_key=${API_KEY}`;

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    /* prepareHeaders: (headers) =>
      headers.set("Authorization", `Bearer ${API_KEY}`), */
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query<IPopularMoviesResponse, void>({
      query: () => getKeyUrl(API_URL_GET_POPULAR_MOVIES),
    }),
  }),
});

export const { useGetPopularMoviesQuery } = moviesApi;

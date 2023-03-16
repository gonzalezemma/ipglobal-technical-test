import { IMovie } from "@interfaces/movie";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  API_URL,
  API_URL_GET_POPULAR_MOVIES,
  API_URL_MOVIE,
  API_URL_RATE_MOVIE,
} from "@constants/env";
import { IPopularMoviesResponse } from "@interfaces/popularMovies";
import getQueryUrl from "utils/getQueryUrl";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    /* prepareHeaders: (headers) =>
      headers.set("Authorization", `Bearer ${API_KEY}`), */
  }),
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    getPopularMovies: builder.query<IPopularMoviesResponse, number>({
      query: (page) =>
        getQueryUrl(`${API_URL_GET_POPULAR_MOVIES}?page=${page}&`),
      serializeQueryArgs: ({ queryArgs, endpointName }) => {
        return queryArgs === 1 ? endpointName + queryArgs : endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.results.push(...newItems.results);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getMovie: builder.query<IMovie, number>({
      query: (id) => getQueryUrl(`${API_URL_MOVIE}/${id}?`),
      providesTags: ["Movies"],
    }),
    rateMovie: builder.mutation({
      query: ({ rate, movieId, guestId }) => ({
        url: getQueryUrl(
          `${API_URL_RATE_MOVIE}${movieId}/rating?guest_session_id=${guestId}&`
        ),
        method: "post",
        body: { value: rate },
      }),
      invalidatesTags: ["Movies"],
      extraOptions: { maxRetries: 0 },
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useGetMovieQuery,
  useRateMovieMutation,
} = moviesApi;

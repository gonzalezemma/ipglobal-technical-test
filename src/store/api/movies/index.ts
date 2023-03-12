import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY, API_URL, API_URL_GET_POPULAR_MOVIES } from "@constants/env";
import { IPopularMoviesResponse } from "@interfaces/popularMovies";

const getKeyUrl = (URL: string) => `${URL}api_key=${API_KEY}`;

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    /* prepareHeaders: (headers) =>
      headers.set("Authorization", `Bearer ${API_KEY}`), */
  }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query<IPopularMoviesResponse, number>({
      query: (page) => getKeyUrl(`${API_URL_GET_POPULAR_MOVIES}?page=${page}&`),
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
  }),
});

export const { useGetPopularMoviesQuery } = moviesApi;

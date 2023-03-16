import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL, API_URL_AUTHENTICATION } from "@constants/env";
import { IGuestSession } from "@interfaces/guestSession";
import getQueryUrl from "utils/getQueryUrl";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getGuestSessionId: builder.query<IGuestSession, void>({
      query: () => getQueryUrl(`${API_URL_AUTHENTICATION}?`),
    }),
  }),
});

export const { useGetGuestSessionIdQuery } = userApi;

import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./api/movies";
import themeSlice from "./slices/theme";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

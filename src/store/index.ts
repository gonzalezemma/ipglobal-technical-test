import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import { moviesApi } from "./api/movies";
import themeSlice from "./slices/theme";

const rootReducer = combineReducers({
  theme: themeSlice,
  [moviesApi.reducerPath]: moviesApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(moviesApi.middleware),
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type store = ReturnType<typeof setupStore>;
export type Dispatch = store["dispatch"];

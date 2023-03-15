import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import { moviesApi } from "./api/movies";
import { userApi } from "./api/user";
import { authMiddleware } from "./middlewares";
import userSlice from "./slices/user";

const rootReducer = combineReducers({
  user: userSlice,
  [userApi.reducerPath]: userApi.reducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(moviesApi.middleware)
        .concat(userApi.middleware)
        .concat(authMiddleware),
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type store = ReturnType<typeof setupStore>;
export type Dispatch = store["dispatch"];

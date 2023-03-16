import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "@interfaces/movie";
import { ETheme } from "@constants/themes";
import { PaletteMode } from "@mui/material";
import { setMovieToLocalList } from "utils/localStorage";

export interface UserState {
  expiresAt?: string;
  guestId?: string;
  theme: PaletteMode;
  myMovieList: IMovie[];
}

const initialState: UserState = {
  theme: ETheme.DARK,
  myMovieList: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<PaletteMode>) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
    setUser: (state, action: PayloadAction<UserState>) => {
      state.guestId = action.payload.guestId;
      state.expiresAt = action.payload.expiresAt;
      state.theme = action.payload.theme;
      state.myMovieList = action.payload.myMovieList;
    },
    addMovieToList: (state, action: PayloadAction<IMovie>) => {
      state.myMovieList = state.myMovieList.concat(action.payload);
      setMovieToLocalList(action.payload);
    },
  },
});

export const { setTheme, setUser, addMovieToList } = userSlice.actions;
export default userSlice.reducer;

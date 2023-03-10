import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ETheme } from "@constants/themes";
import { PaletteMode } from "@mui/material";

export interface ThemeState {
  theme: PaletteMode;
}

const initialState: ThemeState = {
  theme: ETheme.DARK,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<PaletteMode>) => {
      state.theme = action.payload;
    },
  },
});

export default themeSlice.reducer;

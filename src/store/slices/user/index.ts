import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ETheme } from "@constants/themes";
import { PaletteMode } from "@mui/material";

export interface UserState {
  guestId?: string;
  theme: PaletteMode;
}

const initialState: UserState = {
  theme: ETheme.DARK,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<PaletteMode>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = userSlice.actions;
export default userSlice.reducer;

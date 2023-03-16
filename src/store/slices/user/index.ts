import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ETheme } from "@constants/themes";
import { PaletteMode } from "@mui/material";

export interface UserState {
  expiresAt?: string;
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
      localStorage.setItem("theme", action.payload);
    },
    setUser: (state, action: PayloadAction<UserState>) => {
      state.guestId = action.payload.guestId;
      state.expiresAt = action.payload.expiresAt;
      state.theme = action.payload.theme;
    },
  },
});

export const { setTheme, setUser } = userSlice.actions;
export default userSlice.reducer;

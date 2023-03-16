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
    },
    setUser: (
      state,
      action: PayloadAction<{ expiresAt: string; guestId: string }>
    ) => {
      state.guestId = action.payload.guestId;
      state.expiresAt = action.payload.expiresAt;
    },
  },
});

export const { setTheme, setUser } = userSlice.actions;
export default userSlice.reducer;

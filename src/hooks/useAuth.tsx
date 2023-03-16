import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useLazyGetGuestSessionIdQuery } from "@store/api/user";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { setUser } from "@store/slices/user";
import { PaletteMode } from "@mui/material";
import { getLocalUser, setLocalUser } from "utils/localStorage";
import { useEffect } from "react";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const { guestId, expiresAt, theme, myMovieList } = useAppSelector(
    (state) => state.user
  );
  const user = getLocalUser();
  const [trigger, { data, isUninitialized }] = useLazyGetGuestSessionIdQuery();

  useEffect(() => {
    if (data) {
      const newUser = {
        guestId: data.guest_session_id,
        expiresAt: data.expires_at,
        theme,
        myMovieList,
      };

      setLocalUser(newUser);
      dispatch(setUser(newUser));
    }
  }, [data]);

  if (!user.guestId && isUninitialized) {
    trigger();
  }

  if (user.guestId && user.expiresAt && user.theme && !guestId && !expiresAt) {
    dispatch(
      setUser({
        guestId: user.guestId,
        expiresAt: user.expiresAt,
        theme: user.theme as PaletteMode,
        myMovieList: user.myMovieList,
      })
    );
  }

  return {
    guestId,
    expiresAt,
    theme,
  };
};

export default useAuth;

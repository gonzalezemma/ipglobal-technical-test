import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useLazyGetGuestSessionIdQuery } from "@store/api/user";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { setUser } from "@store/slices/user";
import { PaletteMode } from "@mui/material";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const { guestId, expiresAt, theme } = useAppSelector((state) => state.user);

  const user = {
    guestId: localStorage.getItem("guestId"),
    expiresAt: localStorage.getItem("expiresAt"),
    theme: localStorage.getItem("theme"),
  };

  const [trigger, { data, isUninitialized }] = useLazyGetGuestSessionIdQuery();

  if (!user.guestId && isUninitialized) {
    trigger();

    if (data) {
      localStorage.setItem("guestId", data.guest_session_id);
      localStorage.setItem("expiresAt", data.expires_at);
      localStorage.setItem("theme", theme);
      dispatch(
        setUser({
          guestId: data.guest_session_id,
          expiresAt: data.expires_at,
          theme,
        })
      );
    }
  }

  if (user.guestId && user.expiresAt && user.theme && !guestId && !expiresAt) {
    dispatch(
      setUser({
        guestId: user.guestId,
        expiresAt: user.expiresAt,
        theme: user.theme as PaletteMode,
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

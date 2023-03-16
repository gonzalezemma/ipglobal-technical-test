import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useGetGuestSessionIdQuery } from "@store/api/user";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { setUser } from "@store/slices/user";

const useAuth = () => {
  const dispatch = useAppDispatch();
  const { guestId, expiresAt, theme } = useAppSelector((state) => state.user);
  const user = {
    guestId: localStorage.getItem("guestId"),
    expiresAt: localStorage.getItem("expiredAt"),
    theme: localStorage.getItem("theme"),
  };

  const { data } = useGetGuestSessionIdQuery(
    !user.guestId ? undefined : skipToken
  );

  if (!user.guestId && data) {
    localStorage.setItem("guestId", data.guest_session_id);
    localStorage.setItem("expiredSession", data.expires_at);
    localStorage.setItem("theme", theme);
    dispatch(
      setUser({
        guestId: data.guest_session_id,
        expiresAt: data.expires_at,
      })
    );
  }
  if (user.guestId && user.expiresAt && !guestId && !expiresAt) {
    dispatch(
      setUser({
        guestId: user.guestId,
        expiresAt: user.expiresAt,
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

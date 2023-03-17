import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MuiSlider from "@components/MuiSlider";
import SearchMovie from "@components/SearchMovie";
import { useAppDispatch } from "@store/hooks";
import { setTheme } from "@store/slices/user";
import { ETheme } from "@constants/themes";
import { HOME, MY_LIST } from "@constants/routes";
import logoIpg from "@images/logo-ipg.png";

const Header = (): ReactElement => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const { mode } = theme.palette;
  const themeLogo = {
    flexGrow: 1,
    marginTop: 0.5,
    padding: 1,
    "& img": {
      width: 110,
    },
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <AppBar
      color={!trigger ? "transparent" : "default"}
      sx={{
        backgroundColor: !trigger ? "transparent" : "#000000d0",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Box
          sx={
            mode === ETheme.LIGHT
              ? themeLogo
              : {
                  ...themeLogo,
                  webkitFilter: "invert(100%)",
                  filter: "invert(100%)",
                }
          }
        >
          <NavLink to={HOME}>
            <img src={logoIpg} alt="logo-ipg" />
          </NavLink>
        </Box>
        <Box display="flex" alignItems="center" gap={3} mr={2}>
          <SearchMovie />
          <Typography
            to={HOME}
            component={NavLink}
            color="inherit"
            letterSpacing={1}
            fontWeight="bold"
            variant="subtitle2"
          >
            HOME
          </Typography>
          <Typography
            to={MY_LIST}
            component={NavLink}
            color="inherit"
            letterSpacing={1}
            fontWeight="bold"
            variant="subtitle2"
          >
            MY LIST
          </Typography>
        </Box>

        <MuiSlider
          onClick={() =>
            dispatch(
              setTheme(mode === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT)
            )
          }
        />
      </Toolbar>
    </AppBar>
  );
};
export default Header;

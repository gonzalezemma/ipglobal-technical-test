import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import MuiSlider from "@components/MuiSlider";
import { useAppDispatch } from "@store/hooks";
import { setTheme } from "@store/slices/user";
import { ETheme } from "@constants/themes";
import logoIpg from "@images/logo-ipg.png";
import { HOME, MY_LIST } from "@constants/routes";
import { useScrollTrigger } from "@mui/material";

const Header = (): ReactElement => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const { mode } = theme.palette;
  const themeLogo = {
    flexGrow: 1,
    padding: 1,
    "& img": {
      width: 130,
    },
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <AppBar
      color={!trigger ? "transparent" : "default"}
      sx={{ opacity: 0.8, boxShadow: "none" }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
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

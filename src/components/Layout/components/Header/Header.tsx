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
import { HOME } from "@constants/routes";

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

  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <AppBar position="sticky" color="default">
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
          <MuiSlider
            onClick={() =>
              dispatch(
                setTheme(mode === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT)
              )
            }
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;

import { ReactElement } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import { useAppDispatch } from "@store/hooks";
import { setTheme } from "@store/slices/theme";
import { ETheme } from "@constants/themes";

const Header = (): ReactElement => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <AppBar position="static" color="default">
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {theme.palette.mode} mode
          <IconButton
            sx={{ ml: 1 }}
            onClick={() =>
              dispatch(
                setTheme(
                  theme.palette.mode === ETheme.LIGHT
                    ? ETheme.DARK
                    : ETheme.LIGHT
                )
              )
            }
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;

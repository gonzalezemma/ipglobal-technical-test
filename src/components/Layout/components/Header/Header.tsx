import { ReactElement } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { setTheme } from "@store/slices/theme";
import { ETheme } from "@constants/themes";
import MuiSlider from "@components/MuiSlider";
import { useAppDispatch } from "@store/hooks";

const Header = (): ReactElement => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            IP Movies
          </Typography>
          <MuiSlider
            onClick={() =>
              dispatch(
                setTheme(
                  theme.palette.mode === ETheme.LIGHT
                    ? ETheme.DARK
                    : ETheme.LIGHT
                )
              )
            }
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;

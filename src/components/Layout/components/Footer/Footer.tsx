import { Link } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { ETheme } from "@constants/themes";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 3,
      px: 2,
      mt: "auto",
      backgroundColor: (theme) =>
        theme.palette.mode === ETheme.LIGHT
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
    }}
  >
    <Container maxWidth="sm">
      <Typography variant="subtitle1">
        Prueba técnica para
        <Typography
          to="https://www.ipglobal.es/"
          component={Link}
          color="inherit"
          letterSpacing={1}
          variant="body2"
        >
          {" IP Global "}
        </Typography>
        realizada en {new Date().getFullYear()}
      </Typography>

      <Typography variant="subtitle2">
        Utilizando
        <Typography
          to="https://developers.themoviedb.org/"
          component={Link}
          color="inherit"
          letterSpacing={1}
          variant="body2"
        >
          {" TheMovieDB API "}
        </Typography>
      </Typography>
    </Container>
  </Box>
);

export default Footer;

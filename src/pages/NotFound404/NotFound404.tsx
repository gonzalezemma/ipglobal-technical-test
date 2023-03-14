import { HOME } from "@constants/routes";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
      columns={{ xs: 1, sm: 2, md: 12 }}
    >
      <Grid item xs={1} sm={1} md={4}>
        <Typography variant="h1" sx={{ fontSize: 180, textAlign: "center" }}>
          404
        </Typography>
      </Grid>
      <Grid item xs={1} sm={1} md={4}>
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h6">
              La página que esta buscando no existe
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained">
              <Link to={HOME}>Volver al Inicio</Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NotFound404;

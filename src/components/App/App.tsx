import { BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Router from "./Router";
import { createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import useAuth from "@hooks/useAuth";

const App = () => {
  const { theme: mode } = useAuth();

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div className="App">
          <Router />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

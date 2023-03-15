import { BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "@components/Layout";
import Router from "./Router";
import { createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useAppSelector } from "@store/hooks";

const App = () => {
  const { theme: mode } = useAppSelector((state) => state.user);

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

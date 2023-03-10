import { ThemeProvider } from "@mui/material/styles";
import Layout from "@components/Layout";
import Router from "./Router";
import { createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useAppSelector } from "@store/hooks";

const App = () => {
  const { theme: mode } = useAppSelector((state) => state.theme);

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <div className="App">
          <Router />
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default App;

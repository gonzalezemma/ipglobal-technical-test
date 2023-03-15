import { Container } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

interface ILayout {
  children: ReactNode;
}

const Layout = (): ReactElement => (
  <>
    <Header />
    <Container maxWidth={false} disableGutters>
      <main>
        <Outlet />
      </main>
    </Container>
    <Footer />
  </>
);

export default Layout;

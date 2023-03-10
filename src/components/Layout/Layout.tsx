import { Container } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout): ReactElement => (
  <>
    <Header />
    <Container maxWidth="xl">
      {children}
      <Footer />
    </Container>
  </>
);

export default Layout;

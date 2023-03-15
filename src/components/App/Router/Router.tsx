import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "@components/Loading";
import { HOME, MOVIE } from "@constants/routes";

const Layout = lazy(() => import("@components/Layout"));
const Home = lazy(() => import("@pages/Home"));
const Movie = lazy(() => import("@pages/Movie"));
const NotFound404 = lazy(() => import("@pages/NotFound404"));

const Router = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path={HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={MOVIE} element={<Movie />} />
        <Route path="*" element={<NotFound404 />} />
      </Route>
    </Routes>
  </Suspense>
);

export default Router;

import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "@components/Loading";
import { HOME, MOVIE, MY_LIST, SEARCH } from "@constants/routes";
import { useAppSelector } from "@store/hooks";

const Layout = lazy(() => import("@components/Layout"));
const Home = lazy(() => import("@pages/Home"));
const Movie = lazy(() => import("@pages/Movie"));
const MyList = lazy(() => import("@pages/MyList"));
const Search = lazy(() => import("@pages/Search"));
const NotFound404 = lazy(() => import("@pages/NotFound404"));

const Router = () => {
  const { guestId } = useAppSelector((state) => state.user);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={MOVIE} element={<Movie />} />
          <Route path={`${SEARCH}:key`} element={<Search />} />
          {guestId && <Route path={MY_LIST} element={<MyList />} />}
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;

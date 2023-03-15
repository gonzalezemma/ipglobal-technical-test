import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HOME, MOVIE } from "@constants/routes";
import Loading from "@components/Loading";

const Home = lazy(() => import("@pages/Home"));
const Movie = lazy(() => import("@pages/Movie"));
const NotFound404 = lazy(() => import("@pages/NotFound404"));

const Router = () => {
  const router = createBrowserRouter([
    { path: HOME, element: <Home /> },
    { path: MOVIE, element: <Movie /> },
    { path: "*", element: <NotFound404 /> },
  ]);

  return (
    <Suspense fallback={<Loading minHeight="90vh" />}>
      <main>
        <RouterProvider router={router} />
      </main>
    </Suspense>
  );
};

export default Router;

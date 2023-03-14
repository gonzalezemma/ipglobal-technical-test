import { lazy, Suspense } from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { HOME } from "@constants/routes";
import Loading from "@components/Loading";

const Home = lazy(() => import("@pages/Home"));
const NotFound404 = lazy(() => import("@pages/NotFound404"));

const Router = () => {
  const router = createBrowserRouter([
    { path: HOME, element: <Home /> },
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

import { lazy, Suspense } from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { HOME } from "@constants/routes";

const Home = lazy(() => import("@pages/Home"));

const Router = () => {
  const router = createBrowserRouter([{ path: HOME, element: <Home /> }]);

  return (
    <Suspense>
      <main>
        <RouterProvider router={router} />
      </main>
    </Suspense>
  );
};

export default Router;

import { lazy, Suspense } from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("@pages/Home"));

const Router = () => {
  const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

  return (
    <Suspense>
      <main>
        <RouterProvider router={router} />
      </main>
    </Suspense>
  );
};

export default Router;

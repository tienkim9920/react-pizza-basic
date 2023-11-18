import React, { Suspense } from "react";
import MainLayout from "layouts/MainLayout";
import HomePage from "pages/HomePage";
import { Outlet, RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";
const DetailPizzaPage = React.lazy(() => import("pages/DetailPizzaPage"));
const CreatePizzaPage = React.lazy(() => import("pages/CreatePizzaPage"));

const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/create-pizza',
        element: <CreatePizzaPage />
      },
      {
        path: '/pizza/:id',
        element: <DetailPizzaPage />
      }
    ]
  }
];

const router = createBrowserRouter([
  {
    element: (
      <Outlet />
    ),
    children: appRoutes,
  }
])

const App = () => {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;

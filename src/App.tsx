import MainLayout from "layouts/MainLayout";
import CreatePizzaPage from "pages/CreatePizzaPage";
import DetailPizzaPage from "pages/DetailPizzaPage";
import HomePage from "pages/HomePage";
import { Outlet, RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";

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
  return <RouterProvider router={router} />;
}

export default App;

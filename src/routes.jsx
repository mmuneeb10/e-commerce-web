import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Signin from "./pages/signin/signin";
import PagesWithHeader from "./layout/pagesWithHeader";

let routes = [
  {
    path: "/",
    element: <PagesWithHeader />,
    children: [{ path: "", element: <Home /> }],
  },
  {
    path: "/sign-in",
    element: <Signin />,
  },
];

export const Routes = () => {
  const appRoutes = createBrowserRouter(routes);
  return <RouterProvider router={appRoutes} />;
};

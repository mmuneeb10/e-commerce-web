import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/home/home';
import Signin from './pages/signin/signin';

let routes = [
{
    path:"/",
    element: <Home />,
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

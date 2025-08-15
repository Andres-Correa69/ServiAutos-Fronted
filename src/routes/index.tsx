import type { RouteObject } from "react-router-dom";

import Layout from "@/components/layout";
import { LOGIN_PATH, HOME_PATH } from "@/constants/routePaths";
import Home from "@/pages/home";
import Login from "@/pages/login";

export const routes: RouteObject[] = [
  {
    path: LOGIN_PATH,
    element: <Login />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: HOME_PATH,
        element: <Home />,
      },
    ],
  },
];

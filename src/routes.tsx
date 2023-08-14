import type { RouteObject } from "react-router-dom";
import HomePage from "./pages/homepage"
const routes: RouteObject[] = [
  {
    path: "/home",
    element: <HomePage />,
    children: [],
  },
];

export default routes;
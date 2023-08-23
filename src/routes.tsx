import type { RouteObject } from "react-router-dom";
import Components from "./pages/components"
import Homepage from "./pages/homepage";
const routes: RouteObject[] = [
  {
    path: "/components",
    element: <Components />,
    children: [],
  },
  {
    path: "/home",
    element: <Homepage />,
    children: [],
  },
  { path: '*', element: <Homepage /> }
];

export default routes;
import { Login } from "./pages/Login"
import { ListUsers } from "./pages/List.Users";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/app",
      element: <ListUsers />
    }
  ]);
export function App () {
    return  <RouterProvider router={router} />
}
import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import Home from "../src/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default router;

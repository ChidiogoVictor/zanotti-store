import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import ForgotPassword from "../src/pages/ForgotPassword";
import SignUp from "../src/pages/SIgnUp";

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
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;

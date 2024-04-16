import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/appointment",
        element: <PrivateRoute><Appointment></Appointment></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  }

]);

export default router;
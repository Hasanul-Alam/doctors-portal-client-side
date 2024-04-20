import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Main from "../Layout/Main";
import DashboardMain from "../Pages/Dashboard/DashboardMain/DashboardMain";
import DashboardAppointment from "../Pages/Dashboard/DashboardAppointment/DashboardAppointment";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import DashboardPatients from "../Pages/Dashboard/DashboardPatients/DashboardPatients";
import DashboardPrescriptions from "../Pages/Dashboard/DashboardPrescriptions/DashboardPrescriptions";
import DashboardSettiongs from "../Pages/Dashboard/DashboardSettings/DashboardSettiongs";
import MakeAdmin from "../Pages/Dashboard/DashboardAdmin/MakeAdmin";

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
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardMain></DashboardMain></PrivateRoute>,
    children:[
      {
        path: "dashboard-appointment",
        element: <DashboardAppointment></DashboardAppointment>
      },
      {
        path: "dashboard-home",
        element: <DashboardHome></DashboardHome>
      },
      {
        path: "patients",
        element: <DashboardPatients></DashboardPatients>
      },
      {
        path: "prescriptions",
        element: <DashboardPrescriptions></DashboardPrescriptions>
      },
      {
        path: "make-admin",
        element: <MakeAdmin></MakeAdmin>
      },
      {
        path: "settings",
        element: <DashboardSettiongs></DashboardSettiongs>
      },
    ]
  }

]);

export default router;
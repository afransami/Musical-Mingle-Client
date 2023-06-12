import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Home/Home/Home";
import ErrorPage from "../../Home/ErrorPage/ErrorPage";
import AboutUs from "../../Home/Shared/AboutUs/AboutUs";
import ContactUs from "../../Home/Shared/ContactUs/ContactUs";
import Address from "../../Home/Shared/Address/Address";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";
import AllInstructors from "../../Pages/AllInstructors/AllInstructors";
import Classes from "../../Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Dashboard/Dashboard";
import AddActivities from "../../Components/AddActivities/AddActivities";
import StudentDashboard from "../../Pages/StudentDashboard/StudentDashboard";
import Admin from "../../Pages/Dashboard/Admin/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Registration></Registration>,
      },
      {
        path: "instructors",
        element: <AllInstructors></AllInstructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
      {
        path: "about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "address",
        element: <Address></Address>,
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "allusers",
        element: (
          <PrivateRoute>
            <Admin></Admin>
          </PrivateRoute>
        ),
      },
      {
        path: "studentsclasses",
        element: (
          <PrivateRoute>
            <StudentDashboard></StudentDashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "instructors",
        element: (
          <PrivateRoute>
            <AllInstructors></AllInstructors>
          </PrivateRoute>
        ),
      },
      {
        path: "addAClass",
        element: <AddActivities></AddActivities>,
      },
    ],
  },
]);

export default router;

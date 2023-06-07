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
import Instructors from "../../Pages/Instructors/Instructors";
import Classes from "../../Pages/Classes/Classes";
import Dashboard from "../../Pages/Dashboard/Dashboard";

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
        element: <Instructors></Instructors>,
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


  // {
  //   path: "dashboard",
  //   element: (
  //     <PrivateRoute>
  //       <Dashboard></Dashboard>
  //     </PrivateRoute>
  //   ),
  //   children: [],
  // },
]);

export default router;

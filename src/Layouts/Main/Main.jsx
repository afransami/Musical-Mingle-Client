import React from "react";
import Navbar from "../../Home/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Home/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="container mx-auto">
      {/* <Navbar></Navbar> */}
      <div className=" ">
        <Outlet />
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Main;

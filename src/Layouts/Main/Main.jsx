import React from "react";
import Navbar from "../../Home/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Home/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-0px)] pt-20 pb-60">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;

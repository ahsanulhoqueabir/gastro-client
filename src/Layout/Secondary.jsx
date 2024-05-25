import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

const Secondary = () => {
  return (
    <div>
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Secondary;

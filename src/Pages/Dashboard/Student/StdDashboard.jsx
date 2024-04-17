import React from "react";
import DashboardNav from "../../../Shared/DashboardNav";
import { Outlet } from "react-router-dom";

const StdDashboard = () => {
  return (
    <div className=" relative  min-w-screen min-h-screen">
      <DashboardNav />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default StdDashboard;

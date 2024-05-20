import React, { useState } from "react";
import DashboardNav from "../../../Shared/DashboardNav";
import { Outlet } from "react-router-dom";

const StdDashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=" flex min-h-screen h-full">
        <div className=" h-lvh">
          <DashboardNav open={open} setOpen={setOpen} />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default StdDashboard;

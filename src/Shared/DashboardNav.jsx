import React from "react";
import { FaChalkboardUser, FaCheckToSlot, FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  return (
    <nav class="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white p-2.5 shadow-lg backdrop-blur-lg  fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
      <Link
        to="profile"
        class="flex aspect-square hover:bg-indigo-100 min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700  "
      >
        <FaRegUser />

        <small class="text-center text-xs font-medium"> Profile </small>
      </Link>

      <Link
        to="selectedClass"
        class="flex aspect-square hover:bg-indigo-100 min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700  "
      >
        <FaCheckToSlot />

        <small class="text-center text-xs font-medium"> Selected </small>
      </Link>

      <Link
        to={"Enrolled"}
        class="flex aspect-square hover:bg-indigo-100 min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700  "
      >
        <FaChalkboardUser />

        <small class="text-center text-xs font-medium"> Enrolled </small>
      </Link>
    </nav>
  );
};

export default DashboardNav;

import BottomNav from "../Components/BottomNav";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";

const Basic = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <BottomNav />
    </div>
  );
};

export default Basic;

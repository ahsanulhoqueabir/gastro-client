import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import "sweetalert2/dist/sweetalert2.min.css";
import BottomNav from "./Components/BottomNav";
import OldNav from "./Shared/OldNav";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <OldNav />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
      <BottomNav />
    </div>
  );
};
export default App;

import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../Shared/LoadingSpinner";
import useUserRole from "../Hooks/useUserRole";

const InstructorRoute = ({ children }) => {
  const role = useUserRole();
  const location = useLocation();

  if (role == "instructor") {
    return <>{children}</>;
  }

  return <Navigate to={"/"} state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;

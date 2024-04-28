import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import LoadingSpinner from "../Shared/LoadingSpinner";

const AdminAccess = ({ children }) => {
  const { user, authLoading } = useAuth();
  const location = useLocation();
  const role = useAdmin();
  if (authLoading) {
    return <LoadingSpinner />;
  }
  if (role) {
    return <>{children}</>;
  }

  return <Navigate to={"/"} state={{ from: location }} replace></Navigate>;
};

export default AdminAccess;

import React from "react";
import useUserData from "./useUserData";
import LoadingSpinner from "../Shared/LoadingSpinner";

const useUserRole = () => {
  const [info, infoLoading] = useUserData();
  const userRole = info?.role?.toLowerCase();
  if (infoLoading) {
    return <LoadingSpinner />;
  }
  return userRole;
};

export default useUserRole;

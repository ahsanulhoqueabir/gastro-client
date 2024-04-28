import React from "react";
import useUserData from "./useUserData";

const useAdmin = () => {
  const [info, infoLoading, , ,] = useUserData();
  const userRole = info?.role?.toLowerCase();
  if (infoLoading) {
    return <div>Loading...</div>;
  }
  return userRole === "admin";
};

export default useAdmin;

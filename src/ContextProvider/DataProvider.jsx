import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { authContext } from "./AuthProvider";

export const DataContext = createContext(null);
const DataProvider = ({ children }) => {
  const { user } = useContext(authContext);
  let [userInfo, setInfo] = useState();
  // useEffect(() => {
  //   fetch(`http://localhost:3000/getUserByemail?email=${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setInfo(data.data);
  //     });
  // }, [user]);
  const allData = {
    userInfo,
  };
  return (
    <DataContext.Provider value={allData}>{children}</DataContext.Provider>
  );
};

export default DataProvider;

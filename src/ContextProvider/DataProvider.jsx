import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { authContext } from "./AuthProvider";

export const DataContext = createContext(null);
const DataProvider = ({ children }) => {
  const { user } = useContext(authContext);
  const [instructors, setInstructors] = useState([]);
  let [userInfo, setInfo] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  const allData = {
    userInfo,
    instructors,
  };
  return (
    <DataContext.Provider value={allData}>{children}</DataContext.Provider>
  );
};

export default DataProvider;

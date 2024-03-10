import React, { createContext } from "react";

export const DataContext = createContext(null);
const DataProvider = ({ children }) => {
  const allData = {};
  return (
    <DataContext.Provider value={allData}>{children}</DataContext.Provider>
  );
};

export default DataProvider;

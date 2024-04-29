import React, { useContext } from "react";
import { DataContext } from "../ContextProvider/DataProvider";

const useDataProvider = () => {
  const data = useContext(DataContext);
  if (data) return data;
};

export default useDataProvider;

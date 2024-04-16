import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { authContext } from "../ContextProvider/AuthProvider";
const useClasses = () => {
  const { user } = useContext(authContext);

  const {
    isPending: classLoading,
    refetch,
    data: info = [],
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const url = `http://localhost:3000/getUserByemail?email=${user?.email}`;
      const response = await fetch(url);
      return response.json();
    },
  });
  return [info, classLoading, refetch];
};

export default useClasses;

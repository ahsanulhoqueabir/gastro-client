import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { authContext } from "../ContextProvider/AuthProvider";
const useSelected = () => {
  const { user } = useContext(authContext);

  let {
    isPending: infoLoading,
    refetch,
    data: info = [],
  } = useQuery({
    queryKey: ["info"],
    queryFn: async () => {
      const url = `http://localhost:3000/getUserByemail?email=${user?.email}`;
      const response = await fetch(url);
      return response.json();
    },
  });
  return [(info = info.data), infoLoading, refetch];
};

export default useSelected;

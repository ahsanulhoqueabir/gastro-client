import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "./useAxiosSecure";

const useAllUser = () => {
  const queryClient = useQueryClient();
  const [axiosSecure] = useAxiosSecure();
  const {
    isPending: allUserLoading,
    refetch,
    data: allUser = [],
  } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const response = await axiosSecure.get("/users");
      return response.data;
    },
  });
  return [allUser, allUserLoading, refetch];
};

export default useAllUser;

import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
const useClasses = () => {
  const queryClient = useQueryClient();
  const axios = useAxiosSecure();
  const {
    isPending: classLoading,
    refetch,
    data: classes = [],
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/allclasses");
      return response.json();
      // const response = await axios.get("/allclasses");
      // if (response.status !== 200) {
      //   throw new Error(response.message);
      // } else {
      //   return response.data;
      // }
    },
  });
  return [classes, classLoading, refetch];
};

export default useClasses;

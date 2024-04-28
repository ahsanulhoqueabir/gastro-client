import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useMyClasses = () => {
  const { user, authLoading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  let {
    isPending: myClassesLoading,
    refetch,
    data: myClassesData = [],
  } = useQuery({
    queryKey: ["myClasses"],
    enabled: !authLoading,
    queryFn: async () => {
      const response = await axiosSecure.get(`/myclass/${user?.email}`);
      return response.data;
    },
  });

  return [myClassesData, myClassesLoading, refetch];
};

export default useMyClasses;

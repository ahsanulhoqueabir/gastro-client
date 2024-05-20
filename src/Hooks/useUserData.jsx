import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useUserData = () => {
  const { user, authLoading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const token = localStorage.getItem("access-token");

  let {
    isPending: infoLoading,
    refetch,
    data: info = [],
  } = useQuery({
    queryKey: ["info"],
    enabled: !authLoading,
    queryFn: async () => {
      let response = {};
      if (user) {
        response = await axiosSecure.get(`/users/query?email=${user?.email}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
      }

      return response.data[0];
    },
  });
  return [info, infoLoading, refetch];
};

// info, infoLoading, refetch, selectedClass, enrolledClass

export default useUserData;

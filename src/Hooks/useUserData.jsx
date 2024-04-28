import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useUserData = () => {
  const { user, authLoading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  let selectedClass = [];
  let enrolledClass = [];
  let {
    isPending: infoLoading,
    refetch,
    data: info = [],
  } = useQuery({
    queryKey: ["info"],
    enabled: !authLoading,
    queryFn: async () => {
      // const url = `http://localhost:3000/getUserByemail?email=${user?.email}`;
      // const response = await fetch(url, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });
      // const data = await response.json();
      // return data;
      const response = await axiosSecure.get(
        `/getUserByemail?email=${user?.email}`
      );

      return response.data.data;
    },
  });
  return [
    info,
    infoLoading,
    refetch,
    (selectedClass = info?.selectedClass),
    (enrolledClass = info?.enrolledClass),
  ];
};

// info, infoLoading, refetch, selectedClass, enrolledClass

export default useUserData;

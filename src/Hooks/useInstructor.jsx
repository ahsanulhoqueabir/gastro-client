import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useInstructor = () => {
  const queryClient = useQueryClient();
  const axiosPublic = useAxiosPublic();
  const {
    isPending: instructorLoading,
    refetch: refetchInstructor,
    data: instructors = [],
  } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      // const response = await fetch("http://localhost:3000/instructors");
      //return response.json();
      const response = await axiosPublic.get("/instructors");
      if (!response) return;
      return response.data;
    },
  });
  return [instructors, instructorLoading, refetchInstructor];
};

export default useInstructor;

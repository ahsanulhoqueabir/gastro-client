import { useQuery, useQueryClient } from "@tanstack/react-query";

const useInstructor = () => {
  const queryClient = useQueryClient();
  const {
    isPending: instructorLoading,
    refetch: refetchInstructor,
    data: instructors = [],
  } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/instructors");
      return response.json();
    },
  });
  return [instructors, instructorLoading, refetchInstructor];
};

export default useInstructor;

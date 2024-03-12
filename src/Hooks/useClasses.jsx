import { useQuery, useQueryClient } from "@tanstack/react-query";
const useClasses = () => {
  const {
    isLoading: classLoading,
    refetch,
    data: classes = [],
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/allclasses");
      return response.json();
    },
  });
  return [classes, classLoading, refetch];
};

export default useClasses;

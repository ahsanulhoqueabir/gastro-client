import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import sortClass from "../utilities/function";
const useClasses = () => {
  const queryClient = useQueryClient();
  const axios = useAxiosSecure();
  let sortedPopularClass = [];

  const {
    isPending: classLoading,
    refetch,
    data: classes = [],
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const response = await fetch(
        "https://server-gastronomix.netlify.app/.netlify/functions/api/v1/courses/courses"
      );
      return response.json();
    },
  });
  if (classes.length > 0) {
    const tempArray = [...classes];
    sortedPopularClass = sortClass(tempArray);
  }
  return [classes, classLoading, refetch, sortedPopularClass];
};

export default useClasses;

import { useEffect, useState } from "react";
import PopularInstructorLoaderCard from "../../../../Components/Loader/PopularInstructorLoaderCard";
import SectionTitle from "../../../../Components/SectionTitle";
import LoadingSpinner from "../../../../Shared/LoadingSpinner";
import InstructorCard from "./InstructorCard";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const PopularInstructor = () => {
  // const [instructors, instructorLoading] = useInstructor();
  const [instructors, setinstructor] = useState([]);
  const [instructorLoading, setinstructorLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic
      .get("users/instructor")
      .then((res) => {
        setinstructor(res.data);
        setinstructorLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <SectionTitle>Popular Instructors</SectionTitle>
      <section className="px-3 lg:px-10 py-10">
        {instructorLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, idx) => (
              <PopularInstructorLoaderCard key={idx} />
            ))}
          </div>
        )}
        {instructors?.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {instructors.slice(0, 6).map((instructor, idx) => (
              <InstructorCard key={idx} data={instructor} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default PopularInstructor;

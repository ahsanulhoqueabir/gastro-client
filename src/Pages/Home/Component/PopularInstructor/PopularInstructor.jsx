import SectionTitle from "../../../../Components/SectionTitle";
import useInstructor from "../../../../Hooks/useInstructor";
import LoadingSpinner from "../../../../Shared/LoadingSpinner";
import InstructorCard from "./InstructorCard";

const PopularInstructor = () => {
  const [instructors, instructorLoading] = useInstructor();

  if (instructorLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <SectionTitle>Popular Instructors</SectionTitle>
      <section className="px-3 lg:px-10 py-10">
        {instructors?.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {instructors.slice(0, 6).map((instructor, idx) => (
              <InstructorCard key={idx} data={instructor} />
            ))}
          </div>
        ) : (
          <p className="text-2xl text-center">No Data Found!</p>
        )}
      </section>
    </div>
  );
};

export default PopularInstructor;

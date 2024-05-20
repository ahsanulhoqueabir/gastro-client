import PageBanner from "../../../Components/PageBanner";
import LoadingSpinner from "../../../Shared/LoadingSpinner";
import Card from "./Card";
import useUserData from "../../../Hooks/useUserData";

const MyClass = () => {
  const [info, infoLoading, refetch] = useUserData();

  if (infoLoading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <PageBanner>My Class</PageBanner>
      <section className="py-10 px-5 lg:px-10 mx-auto">
        {info.course?.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table">
              <thead className="text-sm lg:text-lg text-center">
                <tr>
                  <th className="">Class Poster</th>
                  <th>Class Name</th>
                  <th>Status</th>
                  <th>FeedBack</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {info.course.map((item, idx) => (
                  <Card key={idx} idx={idx + 1} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h1 className="text-center text-2xl">No Class Found</h1>
        )}
      </section>
    </>
  );
};

export default MyClass;

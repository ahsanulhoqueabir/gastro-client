import PageBanner from "../../../Components/PageBanner";
import useMyClasses from "../../../Hooks/useMyClasses";
import Card from "./Card";

const MyClass = () => {
  const [myClassesData, myClassesLoading, refetch] = useMyClasses();
  console.log(myClassesData);
  return (
    <>
      <PageBanner>My Class</PageBanner>
      <section className="py-10 px-5 lg:w-2/3 mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="text-sm lg:text-lg text-center">
              <th className="">Class Image</th>
              <th>Class Name</th>
              <th>Status</th>
              <th>Action</th>
            </thead>
            <tbody className="space-y-2">
              {/* <tr>
                <td className="">Class Image</td>
                <td>Class Name</td>
                <td>Status</td>
                <td>Action</td>
              </tr> */}
              {myClassesData.map((item, idx) => (
                <Card key={idx} idx={idx + 1} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default MyClass;

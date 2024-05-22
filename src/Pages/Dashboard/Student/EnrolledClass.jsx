import useSelected from "../../../Hooks/useUserData";
import PageBanner from "../../../Components/PageBanner";
import CardEn from "./Component/CardEn";
import EmptyItems from "../../../Components/Loader/EmptyItems";
import RouteTitle from "../../../utilities/RouteTitle";

const EnrolledClass = () => {
  const [info, infoLoading, refetch, , enrolledClass] = useSelected();
  const l = info?.enrolled?.length;
  RouteTitle("Enrolled Classes");

  return (
    <>
      <PageBanner>My Enrolled Classes</PageBanner>
      <div className="px-5 lg:px-24 py-10">
        {infoLoading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        ) : l > 0 ? (
          <div className="flex justify-center">
            <table className="">
              <tbody>
                {info.enrolled.map((i, idx) => (
                  <CardEn i={i} key={idx} />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyItems />
        )}
      </div>
    </>
  );
};

export default EnrolledClass;

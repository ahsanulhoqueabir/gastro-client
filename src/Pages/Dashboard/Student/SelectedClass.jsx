import PageBanner from "../../../Components/PageBanner";
import Card from "./Component/Card";
import useUserData from "../../../Hooks/useUserData";
import EmptyItems from "../../../Components/Loader/EmptyItems";
import RouteTitle from "../../../utilities/RouteTitle";
import LoadingPage from "../../../Components/Loader/LoadingPage";

const SelectedClass = () => {
  let [info, infoLoading, refetch] = useUserData();
  RouteTitle("Selected Classes");

  const l = info?.selected?.length;
  if (infoLoading) {
    return <LoadingPage />;
  }
  return (
    <>
      <PageBanner>My Selected Class</PageBanner>
      <div className="px-5 lg:px-24 py-10">
        {l > 0 ? (
          <div className="flex justify-center">
            <table className="">
              <tbody>
                {info.selected.map((i, ind) => (
                  <Card i={i} key={ind} />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyItems message={"You  haven't selected any class yet"} />
        )}
      </div>
    </>
  );
};

export default SelectedClass;

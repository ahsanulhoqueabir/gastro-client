import React, { useEffect, useState } from "react";
import PageBanner from "../../../Components/PageBanner";
import ClassCard from "./Component/ClassCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingPage from "../../../Components/Loader/LoadingPage";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosSecure.get("/courses").then((res) => {
      setClasses(res.data);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <>
      <PageBanner>Manage Class</PageBanner>
      <section>
        <div className=" overflow-x-auto px-3 lg:px-20 mx-auto w-fit">
          <table className="table my-10">
            <tbody>
              {classes.map((item, idx) => (
                <ClassCard key={idx} data={item} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ManageClasses;

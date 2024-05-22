import React from "react";
import { useLocation } from "react-router-dom";
import PageBanner from "../../../Components/PageBanner";
import { useForm } from "react-hook-form";
import useUserData from "../../../Hooks/useUserData";
import Button from "../../../Components/Button/Button";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import RouteTitle from "../../../utilities/RouteTitle";

const UpdateClass = () => {
  RouteTitle("Update Class");
  const [info, infoLoading] = useUserData();
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const { data } = location.state;
  const {
    _id,
    className,
    classDescription,
    classPrice,
    classImage,
    approveStatus,
    totalSeats,
    seatsAvailable,
    feedback,
  } = data;
  //   console.log(data);
  const onSubmit = async (data) => {
    data.totalSeats = parseInt(data.seatsAvailable);
    data.seatsAvailable = parseInt(data.seatsAvailable);
    data.classPrice = parseInt(data.classPrice);
    axiosSecure.put(`/courses/update?id=${_id}`, data).then((res) => {
      if (res.status === 200) {
        toast.success("Updated Successfully");
      }
    });
  };
  return (
    <>
      <PageBanner>Update Class</PageBanner>
      <section className="lg:px-28 px-5 py-10 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 ">
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className=" font-medium">Class Name</label>
              <input
                type="text"
                defaultValue={className}
                className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
                placeholder="Enter Class Name"
                {...register("className", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <label className=" font-medium">Class Details</label>
              <input
                type="text"
                defaultValue={classDescription}
                className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
                placeholder="Enter Class Details"
                {...register("classDescription", { required: true })}
              />
            </div>

            <div className="space-y-2">
              <label className=" font-medium">Class Instructor </label>
              <input
                type="text"
                className="w-full cursor-not-allowed	 shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
                readOnly
                value={info?.name}
                {...register("instructor", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <label className=" font-medium">Class Instructor Email</label>
              <input
                type="email"
                className="w-full cursor-not-allowed	 shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
                readOnly
                value={info?.email}
                {...register("instructormail", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <label className=" font-medium">Class Available Seats</label>
              <input
                type="number"
                defaultValue={totalSeats}
                className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
                placeholder="Enter Available Seats"
                {...register("totalSeats", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <label className=" font-medium">Class Price </label>
              <input
                type="number"
                defaultValue={classPrice}
                className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
                placeholder="Enter Price "
                {...register("classPrice", { required: true })}
              />
            </div>
          </div>
          <div className="mx-auto w-fit">
            <Button>Update Class</Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default UpdateClass;

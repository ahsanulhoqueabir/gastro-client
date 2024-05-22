import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../../Components/Button/Button";
import { toast } from "react-toastify";
import useUserData from "../../../Hooks/useUserData";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import PageBanner from "../../../Components/PageBanner";
import RouteTitle from "../../../utilities/RouteTitle";

const AddClass = () => {
  RouteTitle("Add Class");
  const [info] = useUserData();
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const classData = {
      ...data,
      user: info?._id,
    };
    classData.totalSeats = parseInt(classData.seatsAvailable);
    classData.seatsAvailable = parseInt(classData.seatsAvailable);
    classData.classPrice = parseInt(classData.classPrice);

    const apiURL = import.meta.env.VITE_IMG_DB;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${apiURL}`;
    const imgData = new FormData();
    const photoFile = data.classImage[0];
    imgData.append("image", photoFile);
    if (photoFile) {
      await fetch(img_hosting_url, {
        method: "POST",
        body: imgData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success === true) {
            classData.classImage = data.data.display_url;
          }
        });
    }
    // console.log(classData);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/courses/add", classData);
        toast("Added Successfully");
      }
    });
  };
  return (
    <>
      <PageBanner>Add New Class</PageBanner>
      <section className="lg:px-28 px-5 py-10 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 ">
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className=" font-medium">Class Name</label>
              <input
                type="text"
                className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
                placeholder="Enter Class Name"
                {...register("className", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <label className=" font-medium">Class Details</label>
              <input
                type="text"
                className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
                placeholder="Enter Class Details"
                {...register("classDescription", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <label className=" font-medium">Class Image</label>
              <input
                type="file"
                className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
                {...register("classImage", { required: true })}
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
                className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
                placeholder="Enter Available Seats"
                {...register("seatsAvailable", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <label className=" font-medium">Class Price </label>
              <input
                type="number"
                className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
                placeholder="Enter Price "
                {...register("classPrice", { required: true })}
              />
            </div>
          </div>
          <div className="mx-auto w-fit">
            <Button>Add Class</Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddClass;

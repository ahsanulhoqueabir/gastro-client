import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../../Components/Button/Button";
import { toast } from "react-toastify";
import useClasses from "../../../Hooks/useClasses";
import useUserData from "../../../Hooks/useUserData";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AddClass = () => {
  const [info] = useUserData();
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [, , refetch] = useClasses();

  const onSubmit = async (data) => {
    const classData = {
      ...data,
    };
    classData.availableseats = parseInt(classData.availableseats);
    classData.price = parseInt(classData.price);

    const apiURL = import.meta.env.VITE_IMG_DB;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${apiURL}`;
    const imgData = new FormData();
    const photoFile = data.classimage[0];
    imgData.append("image", photoFile);

    if (photoFile) {
      await fetch(img_hosting_url, {
        method: "POST",
        body: imgData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.success === true) {
            classData.classimage = data.data.display_url;
          }
        });
    }

    axiosSecure.post("/allclasses", classData);
    toast("Added Successfully");
    refetch();
    console.log(classData);
  };
  return (
    <div>
      <section className="lg:w-1/3 px-5 py-10 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <label className=" font-medium">Class Name</label>
            <input
              type="text"
              className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
              placeholder="Enter Class Name"
              {...register("classname", { required: false })}
            />
          </div>
          <div className="space-y-2">
            <label className=" font-medium">Class Details</label>
            <input
              type="text"
              className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
              placeholder="Enter Class Details"
              {...register("classdetails", { required: false })}
            />
          </div>
          <div className="space-y-2">
            <label className=" font-medium">Class Image</label>
            <input
              type="file"
              className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
              {...register("classimage", { required: false })}
            />
          </div>
          <div className="space-y-2">
            <label className=" font-medium">Class Instructor</label>
            <input
              type="text"
              className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
              readOnly
              value={info?.name}
              {...register("classinstructor", { required: false })}
            />
          </div>
          <div className="space-y-2">
            <label className=" font-medium">Class Instructor Email</label>
            <input
              type="email"
              className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
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
              {...register("availableseats", { required: false })}
            />
          </div>
          <div className="space-y-2">
            <label className=" font-medium">Class Price </label>
            <input
              type="number"
              className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
              placeholder="Enter Price "
              {...register("price", { required: false })}
            />
          </div>
          <Button>Submit</Button>
        </form>
      </section>
    </div>
  );
};

export default AddClass;

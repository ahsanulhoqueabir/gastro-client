import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../Components/Button/Button";
import { toast } from "react-toastify";
import useClasses from "../../Hooks/useClasses";

const AddClass = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [, , refetch] = useClasses();

  const onSubmit = (data) => {
    const classData = {
      ...data,

      instructormail: "fatinnur@gmail.com",
      classinstructor: "Mohammod Fatin Noor",
    };
    fetch("http://localhost:3000/allclasses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(classData),
    });
    toast("Added Successfully");
    // console.log(classData);
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
              type="text"
              className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
              placeholder="Enter Class Image"
              {...register("classimage", { required: false })}
            />
          </div>
          <div className="space-y-2">
            <label className=" font-medium">Class Instructor</label>
            <input
              type="text"
              className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
              placeholder="Enter Class Instructor"
              {...register("classinstructor", { required: false })}
            />
          </div>
          <div className="space-y-2">
            <label className=" font-medium">Class Instructor Email</label>
            <input
              type="email"
              className="w-full shadow-md shadow-teal-200 rounded-md placeholder:text-black bg-secondary py-2 px-4 focus:outline-none"
              placeholder="Enter Instructor Email"
              {...register("instructormail", { required: false })}
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

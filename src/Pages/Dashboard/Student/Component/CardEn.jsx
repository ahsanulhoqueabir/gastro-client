import React from "react";

const CardEn = ({ i }) => {
  return (
    <tr className="">
      <td className="w-fit">
        <img src={i.classimage} alt="class" className="w-28 h-20 rounded-lg" />
      </td>
      <td className="pl-3">
        <div className=" flex-col justify-between">
          <h1 className="text-lg font-semibold">{i.classname}</h1>
          <h1>
            <small>by</small> <span>{i.classinstructor}</span>
          </h1>
        </div>
      </td>
    </tr>
  );
};

export default CardEn;

import React from "react";
import cn from "../../utilities/cn";

const DetailsButton = ({ children, className, ...props }) => {
  return (
    <button className={cn("btn btn-outline py-0 px-3")} {...props}>
      {children}
    </button>
  );
};

export default DetailsButton;

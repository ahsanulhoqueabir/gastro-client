import React from "react";
import cn from "../../utilities/cn";

const DetailsButton = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "border-2 border-teal-200 rounded-lg py-0.5 lg:py-2 lg:text-lg hover:bg-teal-200 px-3 text-xs"
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default DetailsButton;

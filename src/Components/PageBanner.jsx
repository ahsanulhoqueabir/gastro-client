import anim1 from "../assets/loader1.json";
import anim2 from "../assets/loader2.json";
import Lottie from "lottie-react";

const PageBanner = ({ children }) => {
  return (
    <>
      <div className="relative -z-10 flex items-center justify-center bg-base-300  h-60  px-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-center py-10">
          {children}
        </h1>
        <div className="absolute bottom-0 left-0 lg:px-20">
          <Lottie animationData={anim1} className="h-20 lg:h-48"></Lottie>
        </div>
        <div className="absolute translate-x-1/2 opacity-40">
          <Lottie animationData={anim2} className=" h-36 lg:h-60"></Lottie>
        </div>
      </div>
    </>
  );
};

export default PageBanner;

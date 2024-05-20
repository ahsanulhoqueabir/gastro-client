import PageBanner from "../../../Components/PageBanner";
import Checkout from "./Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import useUserData from "../../../Hooks/useUserData";
import { useState } from "react";
import { useEffect } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK);
const Payment = () => {
  const [info, , refetch, selectedClass] = useUserData();
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const [myClass, setMyClass] = useState({});
  useEffect(() => {
    if (id) {
      axiosPublic.get(`/courses/query?id=${id}`).then((res) => {
        setMyClass(res.data);
      });
    }
  }, []);
  // console.log(myClass);
  return (
    <>
      <PageBanner>Payment Page</PageBanner>
      <div>
        <Elements stripe={stripePromise}>
          <Checkout
            // cartID={currClass._id}
            // classID={classID}
            // title={title}
            // price={price}
            // instructorEmail={instructorEmail}
            data={myClass}
          />
        </Elements>
      </div>
    </>
  );
};

export default Payment;

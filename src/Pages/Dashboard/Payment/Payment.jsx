import PageBanner from "../../../Components/PageBanner";
import Checkout from "./Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import useUserData from "../../../Hooks/useUserData";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK);
const Payment = () => {
  const [, , refetch, selectedClass] = useUserData();
  const { id } = useParams();
  const currClass = selectedClass.find((i) => i._id === id);
  const price = currClass.price;
  const classID = currClass.classID;
  const title = currClass.classname;
  return (
    <>
      <PageBanner>Payment Page</PageBanner>
      <div>
        <Elements stripe={stripePromise}>
          <Checkout
            cartID={currClass._id}
            classID={classID}
            title={title}
            price={price}
          />
        </Elements>
      </div>
    </>
  );
};

export default Payment;

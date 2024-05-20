import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useUserData from "../../../Hooks/useUserData";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// import "../styles/common.css";
//  price, classID, title, cartID, instructorEmail;
const Checkout = ({ data }) => {
  const [info] = useUserData();
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [cardErr, setErr] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [traxID, setTraxID] = useState("");
  const navigate = useNavigate();
  // console.log(data);
  useEffect(() => {
    if (data.classPrice !== null) {
      axiosPublic
        .post("/payment/create-payment-intent", {
          price: data.classPrice,
        })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [data]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    // console.log(card);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      toast(error.message, { type: "error" });
      setErr(error.message);
    } else {
      // console.log("[PaymentMethod]", paymentMethod);
      setErr("");
    }
    const { paymentIntent, error: payError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: info?.name,
            email: info?.email,
          },
        },
      }
    );
    if (payError) {
      setErr(payError.message);
      toast(payError.message, { type: "error" });
    } else {
      setErr("");
      if (paymentIntent.status === "succeeded") {
        setTraxID(paymentIntent.id);
        const paymentDetails = {
          name: info?.name,
          email: info?.email,
          price: data.classPrice,
          date: new Date().toISOString(),
          traxId: paymentIntent.id,
          course: data._id,
          status: "paid",
          user: info._id,
        };
        axiosPublic
          .post("/payment/completePayments", paymentDetails)
          .then((res) => {
            navigate("/dashboard/Enrolled");
          });
        toast("Payment Successful", { type: "success" });
      }
    }
  };
  return (
    <>
      <form className="lg:w-1/3 mx-auto px-5  py-10" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn mt-5 btn-info btn-sm"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardErr && <p className="text-red-500 text-center">{cardErr}</p>}
      {traxID && (
        <p className="text-green-500 text-center">Transaction ID: {traxID}</p>
      )}
    </>
  );
};

export default Checkout;

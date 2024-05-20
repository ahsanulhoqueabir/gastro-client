import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useUserData from "../../../Hooks/useUserData";
import PageBanner from "../../../Components/PageBanner";
import LoadingPage from "../../../Components/Loader/LoadingPage";

const PaymentHistory = () => {
  const [loading, setLoading] = useState(true);
  const [info, infoLoading] = useUserData();
  const [axiosSecure] = useAxiosSecure();
  const [paymentHistory, setPaymentHistory] = useState([]);
  useEffect(() => {
    axiosSecure.get(`/payment/mypayment?id=${info?._id}`).then((res) => {
      setPaymentHistory(res.data);
      setLoading(false);
    });
  }, []);

  if (loading || infoLoading) { 
    return <LoadingPage />;
  }

  return (
    <>
      <PageBanner>Payment History</PageBanner>
      <section>
        <div className=" py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-fit mx-auto gap-5 text-black">
            {paymentHistory.map((payment) => (
              <div
                key={payment._id}
                className="stat w-fit bg-blue-200 rounded-xl"
              >
                <div className="stat-figure ">
                  <div>
                    <div className="border-2 ">
                      <img
                        className="h-16 w-24 "
                        src={payment?.course.classImage}
                      />
                    </div>
                  </div>
                </div>
                <div className="">{info?.name}</div>
                <div className="text-sm ">
                  <div className="flex justify-between">
                    <div className="text-primary">
                      Amount: <span>{payment?.price} tk</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-primary">
                      Date: &nbsp;
                      <span>
                        {new Date(payment?.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-primary">
                      TraxID: &nbsp;
                      <span>{payment?.traxId}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentHistory;

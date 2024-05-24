import React from "react";
import useUserData from "../../../../Hooks/useUserData";
import { toast } from "react-toastify";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const FeedBack = () => {
  const [info] = useUserData();
  const axiosPublic = useAxiosPublic();

  const handleFeedback = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      email: form.email.value,
      message: form.feedback.value,
    };

    axiosPublic
      .post("/feedback/add", data)
      .then((res) => {
        toast.success("Feedback Submitted Successfully!");
        form.reset();
      })
      .catch((err) => {
        toast.error("Failed to Submit Feedback!");
      });
  };
  return (
    <>
      <section className="bg-base-200 py-10 mt-10">
        <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 p-8">
            <p className="ml-6 text-yellow-600 text-lg uppercase tracking-loose">
              FEEDBACK
            </p>
            <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">
              Leave us a feedback!
            </p>
            <p className="text-sm md:text-base leading-snug text-gray-400 text-opacity-100">
              Please provide your valuable feedback and something something ...
            </p>
          </div>
          <div className="flex flex-col w-full lg:w-2/3 justify-center">
            <div className="container w-full px-4">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                    <div className="flex-auto p-5 lg:p-10">
                      <h4 className="text-2xl mb-4 text-black font-semibold">
                        Have a suggestion?
                      </h4>
                      <form
                        onSubmit={handleFeedback}
                        id="feedbackForm"
                        action=""
                        method=""
                      >
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="border-0 px-3 py-3 rounded text-sm shadow w-full bg-transparent    outline-none "
                            defaultValue={info?.email}
                            placeholder="Your Email"
                            disabled={info?.email ? true : false}
                            style={{ transition: "all 0.15s ease 0s" }}
                            required
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="message"
                          >
                            Message
                          </label>
                          <textarea
                            name="feedback"
                            id="feedback"
                            rows="4"
                            cols="80"
                            className="border-0 px-3 py-3 bg-transparent    rounded text-sm shadow focus:outline-none w-full"
                            placeholder="Write Your Message"
                            required
                          ></textarea>
                        </div>
                        <div className="text-center mt-6">
                          <button
                            className="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                            type="submit"
                            style={{ transition: "all 0.15s ease 0s" }}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeedBack;

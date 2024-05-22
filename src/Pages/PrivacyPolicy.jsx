import React from "react";
import RouteTitle from "../utilities/RouteTitle";
import PageBanner from "../Components/PageBanner";

const PrivacyPolicy = () => {
  RouteTitle("Privacy & Policy");
  return (
    <>
      <PageBanner>Privacy Policy</PageBanner>
      <div className="px-5 lg:px-20 py-10 space-y-5">
        <p>
          Gastronomix Academy is committed to protecting your privacy.
          “You/your/user(s)” means you as a user of our Website, including any
          information, tools and services available from the Website. Our
          privacy policy, which applies to all Users of our Website, is designed
          to explain the information we collect and how we use it to provide our
          Services and give Users a better experience (“Privacy Policy”).
          Capitalized terms not defined in this Privacy Policy have the meanings
          given in our Terms of Use. This Privacy Policy is part of, and
          incorporated into, the Terms of Use.
        </p>
        <p>
          This Privacy Policy describes the Personal Information (as defined
          below) we collect about you online on the Website, why we collect it,
          how we use it, and when we share it with third parties. This Privacy
          Policy also describes the choices you can make about how we collect
          and use certain of that information. The Personal Information provided
          by you is not used for any purpose other than as outlined in this
          Privacy Policy.
        </p>
        <p>
          By accessing and using the Website you consent to our collection,
          storage, use and disclosure of your Personal Information and other
          information as described in this Privacy Policy. If you do not agree
          with the terms of this Privacy Policy, please do not provide any
          Personal Information to us. If you choose not to provide any Personal
          Information that is necessary for us to accept you into ICE programs
          or to provide you with specific products or services, we may not be
          able to provide those programs, products or services to you.
        </p>
        <div>
          <h2 className="font-bold text-lg">1. Information We Collect</h2>
          <p>
            We collect both Personal Information and Anonymous Information about
            our users. “Personal Information” is information that can be used to
            contact or identify you or individuals about whom you enter
            information as part of your activities on our Website or Services,
            such as first name, last name, e-mail address, phone number, street
            address, comments, company name and address, title, work experience
            and skills, username and/or e-mail address in combination with a
            password or security questions and answers, account numbers or
            credit/debit card numbers, even without a security code, access
            code, or password if the account could be accessed without such
            information, as well as information that is linked to the forgoing
            information. “Anonymous Information” or de-identified information is
            information that cannot reasonably be used to contact or identify
            you and is not linked to information that can be used to do so. It
            includes passively collected information about your activities on
            the Website such as usage data, to the extent that information is
            not linked to your Personal Information.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg">
            2. Aggregated Anonymous Information
          </h2>
          <p>
            Aggregated Anonymous Information is the combination of your
            Anonymous Information with the Anonymous Information of other users.
            Aggregated Anonymous Information does not allow you to be identified
            or contacted.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold">
            3. Payment Processing Information
          </h2>
          Only some payment processing information is collected by us. We may
          also use a third party(ies) for payment processing. We do not want you
          to send us your credit card or bank account information by e-mail or
          other means except where requested as part of the checkout process.
          Please review the terms of use and privacy policies of the third-party
          payment processor prior to providing Personal Information to them.
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;

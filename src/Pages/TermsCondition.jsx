import React from "react";
import PageBanner from "../Components/PageBanner";
import RouteTitle from "../utilities/RouteTitle";

const TermsCondition = () => {
  RouteTitle("Terms & Condition");
  return (
    <>
      <PageBanner>Terms and Conditions</PageBanner>
      <section className="px-5 lg:px-20 py-10 space-y-5">
        <h2>
          YOU ACKNOWLEDGE AND AGREE THAT BY ACCESSING OR USING THE WEBSITE, OR
          BY DOWNLOADING OR POSTING ANY CONTENT FROM OR THROUGH THE WEBSITE, YOU
          ARE INDICATING THAT YOU HAVE READ, UNDERSTAND AND AGREE TO BE BOUND BY
          THESE TERMS.
        </h2>
        <p>
          The Website enables persons (“Users”) to access and browse the
          Website, which provides information about our culinary schools,
          training programs, continuing education classes and related services.
        </p>
        <div>
          <p>
            Subject to your compliance with these Terms, you are granted a
            limited, non-exclusive, non-transferable license to access and use
            the Website and Service on a computer, tablet device or mobile phone
            that you own or control. All materials contained on, in, or
            available through the Website, including all information, data,
            text, videos, blogs, photographs, graphics, the selection and
            arrangement thereof, and all source code, software compilations, and
            other materials ("Content") are protected by copyright and other
            intellectual property laws and may not be copied or imitated in
            whole or in part by you, unless as explicitly stated under these
            Terms. All trademarks, service marks, trade dress and other
            intellectual property rights, including but not limited to
            copyrights, and all derivative works thereof associated with the
            Content, whether registered or not, are our sole property or the
            property of third parties. The Content may also be protected as a
            collective work or compilation under U.S. copyright and other laws
            and treaties. You agree to abide by all applicable copyright and
            other laws. We do not convey, through allowing access to the Website
            and Service, any ownership rights in the Content. These Terms will
            govern any upgrades provided by us that replace and/or supplement
            the original Website, unless such upgrade is accompanied by separate
            terms in which case such updated Terms will govern.
          </p>
          <p>
            You may not create, develop, license, install, use, or deploy any
            third party software or services to circumvent, enable, modify or
            provide access, permissions or rights to work around any technical
            limitations in the Website. You may not copy (except as expressly
            permitted by these Terms) or publish the Website for others to copy,
            decompile, reverse engineer, disassemble, attempt to derive the
            source code of, or modify, or create derivative works of the
            Website, or any updates, or part thereof (except as and only to the
            extent any foregoing restriction is prohibited by applicable law or
            to the extent as may be permitted by the licensing terms governing
            use of any open source components included with the Website, if
            any). Any attempt to do so is a violation of our rights. If you
            breach this restriction, you may be subject to prosecution and
            damages. You may not use the Website in any manner not specifically
            authorized hereunder or in any way that is against any applicable
            laws or regulations.
          </p>
        </div>
        <p>You represent and warrant that:</p>
        <ul
          className="
        list-disc"
        >
          <li key="i">You are at least eighteen (18) years old,</li>
          <li key="ii">
            You have the right, capacity, and authority to be bound by these
            Terms,
          </li>
          <li key="iii">You will abide by all these Terms.</li>
        </ul>
      </section>
    </>
  );
};

export default TermsCondition;

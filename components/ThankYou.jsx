import React, { useEffect, useState } from "react";

const ThankYou = (props) => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    setShown(true);
  }, []);
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src="/icons/illustration-thank-you.svg"
          alt="thankyou"
          className="w-[144px] h-[96px]"
        />
        <div className="bg-dark-blue rounded-full py-[5px] px-3 flex items-center justify-center mt-6 sm:mt-8 shadow-sm shadow-dark-gray">
          <p className="font-main text-[14px] sm:text-[15px] font-normal text-primary tracking-normal">
            You selected {props.rating} out of 5
          </p>
        </div>
        <h1 className="text-white text-[24px] sm:text-[28px] font-bold font-main mt-6 sm:mt-8">
          Thank you!
        </h1>
        <p className="font-main leading-[22px] text-[14px] sm:text-[15px] font-normal text-[#959eac] tracking-normal mt-4 text-center">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </>
  );
};

export default ThankYou;

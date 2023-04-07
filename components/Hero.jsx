import Link from "next/link";
import React, { useEffect, useState } from "react";
import Circle from "./Circle";
import Button from "./Button";
import RateUs from "./RateUs";
import ThankYou from "./ThankYou";

const Hero = () => {
  const [submitted, setSubmmitted] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [rating, setRating] = useState(0);

  function handleSubmission() {
    if (!rating) return;
    setSubmmitted(true);
    setIsLoading(true);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]);

  return (
    <div className="w-100 h-[100vh] flex justify-center items-center px-6">
      {isLoading ? (
        <div className="animate-spin h-10 w-10 border-t-2 border-primary rounded-full mr-3 text-primary"></div>
      ) : (
        <div className="bg-[#252d37] max-w-[416px] rounded-2xl shadow-lg shadow-[#0d1014] py-8 px-6 sm:p-8 bg-gradient-to-b from-[#252d37] to-[#181e25]">
          {submitted ? (
            <ThankYou rating={rating} />
          ) : (
            <RateUs
              onClick={handleSubmission}
              setRating={setRating}
              submitted={submitted}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Hero;

{
  /* <div className="w-100 h-[100vh] flex justify-center items-center px-6">
      <div className="bg-[#252d37] max-w-[416px] rounded-2xl shadow-lg shadow-[#0d1014] py-8 px-6 sm:p-8 bg-gradient-to-b from-[#252d37] to-[#181e25] flex items-center justify-center sm:min-h-[416px] sm:min-w-[416px]">
        {isLoading ? (
          <div className="animate-spin h-10 w-10 border-t-2 border-primary rounded-full mr-3 text-primary"></div>
        ) : submitted ? (
          <ThankYou rating={rating} />
        ) : (
          <RateUs
            onClick={handleSubmission}
            setRating={setRating}
            submitted={submitted}
          />
        )}
      </div>
    </div> */
}

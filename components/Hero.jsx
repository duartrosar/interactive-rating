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
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading]);

  return (
    <div className="w-100 h-[100vh] flex flex-col justify-center items-center px-6">
      {isLoading ? (
        <div className="animate-spin h-10 w-10 border-t-2 border-primary rounded-full mr-3 text-primary"></div>
      ) : (
        <div className="bg-dark-blue max-w-[416px] rounded-2xl shadow-lg shadow-[#0d1014] py-8 px-6 sm:p-8 bg-gradient-to-b from-dark-blue to-[#181e25]">
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
      {!isLoading && (
        <div className="py-6">
          <p className="font-main text-light-gray text-xs font-semibold text-center">
            Challenge by{" "}
            <Link
              target="_blank"
              className="text-primary"
              href="https://www.frontendmentor.io/"
            >
              Frontend Mentor
            </Link>
            . <br className="sm:hidden" />
            Coded by{" "}
            <Link
              target="_blank"
              className="text-primary"
              href="https://github.com/duartrosar"
            >
              Duarte Ribeiro
            </Link>
            .
          </p>
        </div>
      )}
    </div>
  );
};

export default Hero;

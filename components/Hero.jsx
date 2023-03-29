import Link from "next/link";
import React from "react";
import Circle from "./Circle";
import Button from "./Button";

const Hero = () => {
  const [hoverIndex, setHoverIndex] = React.useState(0);
  const [rating, setRating] = React.useState(0);

  return (
    <div className="w-100 h-[100vh] flex justify-center items-center">
      <div className="bg-[#252d37] w-[412px] rounded-2xl shadow-lg shadow-[#0d1014] py-10 px-8 bg-gradient-to-b from-[#252d37] to-[#181e25]">
        <Circle onClick={() => {}} url="/icons/icon-star.svg" />
        <div className="mt-8">
          <h1 className="text-white text-3xl mb-4 font-main">How did we do?</h1>
          <p className="font-main leading-7 text-[15px] text-[#959eac]">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="mt-8 flex justify-between">
          {[1, 2, 3, 4, 5].map((index) => {
            return (
              <div
                className="w-[100%]"
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(0)}
              >
                {/* {console.log(`Index: ${index}`)}
                {console.log(`Hover: ${hoverIndex}`)} */}
                <Circle
                  onClick={() => setRating(index)}
                  number={index}
                  hover={index <= hoverIndex}
                  selected={index <= rating}
                  rating={rating}
                />
              </div>
            );
          })}
          {/* <Circle number={1} />
          <Circle number={2} />
          <Circle number={3} />
          <Circle number={4} />
          <Circle number={5} /> */}
        </div>
        <div className="mt-8">
          <Button isActive={rating > 0} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

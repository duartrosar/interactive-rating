import React, { useEffect } from "react";
import Circle from "./Circle";
import Button from "./Button";

const RateUs = (props) => {
  const [hoverIndex, setHoverIndex] = React.useState(0);
  const [rating, setRating] = React.useState(0);

  useEffect(() => {
    props.setRating(rating);
  }, [rating]);

  console.log(props.submitted);

  return (
    <>
      <div>
        <Circle onClick={() => {}} url="/icons/icon-star.svg" />
        <div className="mt-4">
          <h1 className="text-white text-[24px] sm:text-[28px] font-bold font-main">
            How did we do?
          </h1>
          <p className="font-main leading-[22px] text-[14px] sm:text-[15px] font-normal text-light-gray tracking-normal mt-4">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="mt-6 flex justify-between">
          {[1, 2, 3, 4, 5].map((index) => {
            return (
              <div
                className={index < 5 ? "w-[100%]" : ""}
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(0)}
              >
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
        </div>
        <Button isActive={rating > 0} onClick={props.onClick} />
      </div>
    </>
  );
};

export default RateUs;

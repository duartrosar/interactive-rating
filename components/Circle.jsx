import React from "react";
import classNames from "classnames";

let [color, scale, textColor] = "";

const Circle = ({ onClick, number = 0, url = "", hover, selected, rating }) => {
  const styles = {
    default: {
      backgroundColor: "bg-dark-blue",
      // scale: "100",
      textColor: "text-light-gray",
    },
    hover: {
      backgroundColor: "bg-primary",
      // scale: "scale-110",
      textColor: "text-[#fff]",
    },
    selected: {
      backgroundColor: "bg-selected",
      // scale: "scale-110",
      textColor: "text-[#fff]",
    },
  };

  const circleStyles = {
    ...styles.default, // Merge the default styles
    ...(selected && styles.selected), // Merge the selected styles if selected is true
    ...(hover && styles.hover), // Merge the selected styles if hover is true
  };

  const circleClasses = classNames(
    "transition",
    "duration-150",
    "rounded-full",
    "cursor-pointer",
    "shadow-md",
    "group",
    circleStyles.backgroundColor,
    "shadow-dark-gray",
    "w-[42px] sm:w-[51px]",
    "h-[42px] sm:h-[51px]",
    "flex",
    "items-center",
    "justify-center",
    circleStyles.scale,
  );

  // if (number == 0) {
  //   console.log(circleStyles);
  // }

  return (
    <div onClick={onClick} className={circleClasses}>
      {number > 0 ? (
        <p
          className={`leading-[0px] self-center font-main text-[14px] sm:text-[16px] ${circleStyles.textColor} font-bold `}
        >
          {number}
        </p>
      ) : (
        <img src={url} alt="/" />
      )}
    </div>
  );
};

export default Circle;

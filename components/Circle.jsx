import React from "react";
import classNames from "classnames";

let [color, scale, textColor] = "";

const Circle = ({ onClick, number = 0, url = "", hover, selected }) => {
  const styles = {
    default: {
      color: "bg-dark-blue",
      // scale: "100",
      textColor: "text-light-gray",
    },
    hover: {
      color: "bg-primary",
      // scale: "scale-110",
      textColor: "text-[#fff]",
    },
    selected: {
      color: "bg-selected",
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
    "rounded-full",
    "cursor-pointer",
    "shadow-md",
    "group",
    circleStyles.color,
    "shadow-dark-gray",
    "w-[48px]",
    "h-[48px]",
    "flex",
    "items-center",
    "justify-center",
    circleStyles.scale,
  );

  if (number == 0) {
    console.log(circleStyles);
  }

  return (
    <div onClick={onClick} className={circleClasses}>
      {number > 0 ? (
        <p
          className={`leading-[0px] self-center font-main text-[15px] ${circleStyles.textColor} font-bold `}
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

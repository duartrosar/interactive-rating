import Link from "next/link";
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Button = (props) => {
  const styles = {
    inactive: {
      backgroundColor: "bg-dark-blue",
      backgroundHoverColor: "hover:bg-dark-blue",
      textColor: "text-light-gray",
      hoverTextColor: "hover:text-light-gray",
      cursorStyle: "cursor-not-allowed",
    },
    active: {
      backgroundColor: "bg-primary",
      backgroundHoverColor: "hover:bg-white",
      textColor: "text-white",
      hoverTextColor: "hover:text-primary",
      cursorStyle: "cursor-pointer",
    },
  };

  const {
    backgroundColor,
    backgroundHoverColor,
    textColor,
    hoverTextColor,
    cursorStyle,
  } = props.isActive ? styles.active : styles.inactive;

  const buttonClasses = classNames(
    "font-main",
    "text-center",
    "p-3",
    "rounded-full",
    "uppercase",
    "font-bold",
    "text-[14px] sm:text-[15px]",
    "transition",
    "w-full",
    "shadow-md",
    "mt-6",
    backgroundColor,
    backgroundHoverColor,
    textColor,
    hoverTextColor,
    cursorStyle,
  );

  return (
    <button onClick={props.onClick} className={buttonClasses}>
      Submit
    </button>
  );
};

Button.propTypes = {
  isActive: PropTypes.bool,
};

Button.defaultProps = {
  isActive: false,
};

export default Button;

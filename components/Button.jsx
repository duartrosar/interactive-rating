import Link from "next/link";
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Button = ({ isActive }) => {
  const styles = {
    inactive: {
      backgroundColor: "bg-dark-gray",
      backgroundHoverColor: "hover:bg-dark-gray",
      textColor: "text-gray-800",
      hoverTextColor: "text-gray-800",
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
  } = isActive ? styles.active : styles.inactive;

  const buttonClasses = classNames(
    "font-main",
    "text-center",
    "p-2",
    "rounded-full",
    "uppercase",
    "font-normal",
    "text-lg",
    "transition",
    "w-full",
    backgroundColor,
    backgroundHoverColor,
    textColor,
    hoverTextColor,
    cursorStyle,
  );

  return <button className={buttonClasses}>Submit</button>;
};

Button.propTypes = {
  isActive: PropTypes.bool,
};

Button.defaultProps = {
  isActive: false,
};

export default Button;

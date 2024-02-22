import React from "react";

const CustomIndicator = ({ index, onClickHandler, isSelected }) => {
  const activeStyles = {
    width: "10px",
    height: "10px",
  };

  const inactiveStyles = {
    width: "10px",
    height: "10px",
  };

  return (
    <div
      style={isSelected ? activeStyles : inactiveStyles}
      onClick={() => onClickHandler(index)}
    />
  );
};

export default CustomIndicator;

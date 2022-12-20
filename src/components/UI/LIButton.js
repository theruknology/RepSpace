import React from "react";

const LIButton = (props) => {
  return (
    <button
      className={props.className + ` bg-white w-full text-left pl-4 py-1 rounded-md text-gray-500 font-medium underline`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default LIButton;

import React from "react";

const LIButton = (props) => {
  return (
    <button
      className={props.className + ` bg-white w-fit min-w-[200px] min-h-[100px] text-center py-1 rounded-md text-gray-500 font-medium text-lg underline drop-shadow-lg hover:bg-gray-800 hover:text-gray-100 transition-colors`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default LIButton;

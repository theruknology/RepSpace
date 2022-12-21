import React from "react";

const Navigation = (props) => {
  const viewChange = () => {
    props.onChangeView("Dashboard");
  };

  return (
    <div className="flex gap-2 items-end">
      <button
        className="font-semibold text-sm text-gray-500"
        onClick={viewChange}
      >
        {"<"} {props.Parent}
      </button>
      <p className="text-sm text-gray-500">/ {props.Child}</p>
    </div>
  );
};

export default Navigation;

import React from "react";
import LIButton from "../UI/LIButton";

const TodayView = (props) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-semibold">Today View</h1>
      <ul className="flex flex-col gap-2">
        <LIButton>Button</LIButton>
        <LIButton>Button</LIButton>
        <LIButton>Button</LIButton>
      </ul>
    </div>
  );
};

export default TodayView;

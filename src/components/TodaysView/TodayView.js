import React, { useContext } from "react";
import CardContext from "../../context/CardContext";
import LIButton from "../UI/LIButton";

const TodayView = (props) => {
  const ctx = useContext(CardContext);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-semibold">Today's Study Topics</h1>
      <ul className="flex flex-col gap-2">
        {ctx.todaysBoxes.map((itm) => (
          <LIButton key={itm}>{"Box " + itm.charAt(itm.length - 1)}</LIButton>
        ))}
      </ul>
    </div>
  );
};

export default TodayView;

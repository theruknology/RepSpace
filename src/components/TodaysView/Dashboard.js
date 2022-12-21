import React from "react";
import TodayView from "./TodayView";

const Dashboard = (props) => {
  const addTitleHandler = () => {
    props.onChangeView("New Topic");
  };
  const allBoxesHandler = () => {
    props.onChangeView("All Boxes");
  };
  return (
    <>
      <TodayView />
      <div className="flex gap-2 text-white mt-auto ml-auto">
        <button
          onClick={addTitleHandler}
          className="w-fit mt-auto bg-blue-600 py-1 px-3 rounded-md focus:ring-4 focus:ring-blue-300 focus:outline-none hover:bg-blue-800"
        >
          Add topic
        </button>
        <button
          onClick={allBoxesHandler}
          className="w-fit mt-auto bg-blue-600 py-1 px-3 rounded-md focus:ring-4 focus:ring-blue-300 focus:outline-none hover:bg-blue-800"
        >
          All boxes
        </button>
      </div>
    </>
  );
};

export default Dashboard;

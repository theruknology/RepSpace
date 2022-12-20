import React from "react";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import TodayView from "./components/TodaysView/TodayView";
import "./index.css";

export default function App() {
  const today = new Date(Date.now());
  const anotherDay = new Date(2022, 11, 20);
  const diffDays = Math.ceil(
    Math.abs(today - anotherDay) / (1000 * 60 * 60 * 24)
  );
  const stringer = today.toString();

  return (
    <div
      id="container"
      className="w-[400px] h-[700px] mx-auto bg-slate-100 p-4 flex flex-col gap-4"
    >
      <div
        id="window"
        className="bg-gray-300 flex-grow w-full rounded-xl p-4 pt-10 flex flex-col "
      >
        <TodayView />
        <p>{diffDays}</p>
        <p>{stringer}</p>
        <div className="flex flex-col gap-1 text-blue-600 underline mt-auto">
          <button className="w-fit mt-auto">Add Title 🡢</button>
          <button className="w-fit mt-auto">Add Title 🡢</button>
        </div>
      </div>
      <Pomodoro />
    </div>
  );
}

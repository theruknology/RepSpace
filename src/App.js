import React, { useState } from "react";
import AllBoxes from "./components/AllBoxes/AllBoxes";
import Course from "./components/CardCourse/Course";
import NewTopic from "./components/NewTopic/NewTopic";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import Dashboard from "./components/TodaysView/Dashboard";
import Navigation from "./components/UI/Navigation";
import "./index.css";

export default function App() {
  const [view, setView] = useState("Dashboard");
  const [showPom, setShowPom] = useState(false);
  const [currentCourse, setCurrentCourse] = useState("box1");

  const changeViewHandler = (view) => {
    setView(view);
  };

  const changeBoxHandler = (box) => {
    setCurrentCourse(box);
  };

  document.title = "RepSpace - " + view;

  return (
    <div
      id="container"
      className="w-[100vw] h-[100vh] max-sm:h-[90vh] mx-auto bg-slate-100 p-4 flex flex-col gap-4"
    >
      {/* Window Container to duplicate routing process */}
      <div
        id="window"
        className="bg-gray-300 flex-grow w-full rounded-xl p-4 pt-10 flex flex-col gap-4"
      >
        {view !== "Dashboard" && (
          <Navigation
            Parent="Dashboard"
            Child={view}
            onChangeView={changeViewHandler}
          />
        )}
        {view === "Dashboard" && (
          <Dashboard
            onChangeView={changeViewHandler}
            onSetBox={changeBoxHandler}
          />
        )}
        {view === "New Topic" && <NewTopic onChangeView={changeViewHandler} />}
        {view === "Course Session" && <Course box={currentCourse} />}
        {view === "All Boxes" && <AllBoxes />}
      </div>
      {showPom && (
        <Pomodoro
          onClose={() => {
            setShowPom(false);
          }}
        />
      )}
    </div>
  );
}

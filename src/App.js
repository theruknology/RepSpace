import React, { useState } from "react";
import NewTopic from "./components/NewTopic/NewTopic";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import Dashboard from "./components/TodaysView/Dashboard";
import Navigation from "./components/UI/Navigation";
import "./index.css";

export default function App() {
  const [view, setView] = useState("New Topic");
  const [showPom, setShowPom] = useState(true);

  const changeViewHandler = (view) => {
    setView(view);
  };

  document.title = "RepSpace - " + view;

  return (
    <div
      id="container"
      className="w-[400px] h-[100vh] mx-auto bg-slate-100 p-4 flex flex-col gap-4"
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
        {view === "Dashboard" && <Dashboard onChangeView={changeViewHandler} />}
        {view === "New Topic" && <NewTopic onChangeView={changeViewHandler}/>}
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

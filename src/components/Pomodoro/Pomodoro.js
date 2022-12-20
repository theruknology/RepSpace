import React, { useEffect, useState } from "react";

const Pomodoro = (props) => {
  const [seconds, setSeconds] = useState(9);
  const [minutes, setMinutes] = useState(1);
  const [timerRunning, setTimerRunning] = useState(false);

  // let timer;
  // const startTimer = () => {
  //   timer = setInterval(() => {
  //     timerHandler(seconds, minutes);
  //   }, 1000);
  // };

  // const timerHandler = (seconds,minutes) => {
  //   if (seconds === 1) {
  //     setSeconds(60);
  //     if (minutes !== 0) {
  //       setMinutes((prev) => prev - 1);
  //     } else {
  //       setSeconds(59);
  //       setMinutes(24);
  //       clearInterval(timer);
  //     }
  //   } else if (seconds > 1) {
  //     console.log(seconds);
  //     setSeconds((prev) => prev - 1);
  //   }
  // };

  // const startButtonHandler = () => {
  //   startTimer();
  //   setTimerRunning(true);
  // };

  // const resetButtonHandler = () => {
  //   // clearInterval(timer);
  //   // setMinutes(24);
  //   // setSeconds(59);
  //   // setTimerRunning(false);
  // };

  return (
    <div
      className={
        props.className +
        ` bg-gray-300 h-fit flex flex-col gap-2 rounded-xl p-4 cursor-pointer`
      }
    >
      <h3 className="font-semibold text-gray-700">Pomodoro Timer</h3>
      <p className="font-extrabold text-5xl text-gray-700">
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </p>
      <div className="flex gap-2 w-fit ml-auto">
        {!timerRunning && (
          <button
            className="w-fit ml-auto bg-gray-700 text-gray-100 py-2 px-4 rounded-lg hover:bg-gray-900 focus:ring-4 focus:ring-gray-400 focus:outline-none"
          >
            Start
          </button>
        )}
        <button
          className="w-fit ml-auto bg-gray-700 text-gray-100 py-2 px-4 rounded-lg hover:bg-gray-900 focus:ring-4 focus:ring-gray-400 focus:outline-none"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Pomodoro;

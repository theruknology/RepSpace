import React, { useEffect, useState } from "react";

const CardContext = () => {
  const [cycleStart, setCycleStart] = useState(null);
  const [allCards, setAllCards] = useState([]);

  const todaysBoxes = (cycleStart) => {
    const today = new Date(Date.now());
    const absToday = new Date(
      `${today.getFullYear}-${today.getMonth + 1}-${today.getDate} `
    );
    const todaysBoxesArray = ["box1"];
    let cycleStartDate = new Date(cycleStart);
    const diffDays = Math.ceil(
      Math.abs(absToday - cycleStartDate) / (1000 * 60 * 60 * 24)
    );

    if (diffDays !== 0) {
      // Checking for days starts
      if (diffDays % 2 === 0) {
        todaysBoxesArray.push("box2");
      }
      if (diffDays % 4 === 0) {
        todaysBoxesArray.push("box3");
      }
      if (diffDays % 9 === 0) {
        todaysBoxesArray.push("box4");
      }
      if (diffDays % 14 === 0) {
        todaysBoxesArray.push("box5");
      }
    }

    return todaysBoxesArray;
  };

  useEffect(() => {
    if (localStorage.getItem("CYCLE_START") !== undefined) {
      setCycleStart(localStorage.getItem("CYCLE_START"));
    } else {
    }
  }, []);

  return;
};

import React, { useEffect, useState } from "react";

const CardContext = React.createContext({
  allCards: [],
  cycleStart: "",
  todaysBoxes: [],
  addCard: (title, box = "box1") => {},
  deleteCard: (id) => {},
  changeBoxOfCard: (id, box) => {},
});

export const CardContextProvider = (props) => {
  // Store date in STRING Type
  const [cycleStart, setCycleStart] = useState("");
  const [allCards, setAllCards] = useState([]);
  const [todaysBoxes, setTodaysBoxes] = useState([]);

  // input date in STRING Type
  const todaysBoxesCalc = (cycleStart) => {
    const today = new Date(Date.now());
    const absToday = new Date(
      `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    );

    // *IMPORTANT ->
    // REMOVE box2 before Deploying
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
    if (localStorage.getItem("CYCLE_START") !== null) {
      const storedDate = localStorage.getItem("CYCLE_START");
      setCycleStart(storedDate);
      const boxer = todaysBoxesCalc(storedDate);
      setTodaysBoxes(boxer);
    } else {
      const today = new Date(Date.now());
      const todayString = `${today.getFullYear()}-${
        today.getMonth() + 1
      }-${today.getDate()}`;
      localStorage.setItem("CYCLE_START", todayString);
      setCycleStart(todayString);
      const boxer = todaysBoxesCalc(todayString);
      setTodaysBoxes(boxer);
    }

    if (localStorage.getItem("ALL_CARDS") !== null) {
      const storageObject = JSON.parse(localStorage.getItem("ALL_CARDS"));
      setAllCards(storageObject.cards);
    }
  }, []);

  useEffect(() => {
    const storageObject = {
      cards: [...allCards],
    };
    localStorage.setItem("ALL_CARDS", JSON.stringify(storageObject));
    console.log('local storage updated');
  }, [allCards]);

  const addCard = (title, box = "box1") => {
    setAllCards((prev) => {
      return [
        ...prev,
        { id: Math.random().toString(), title: title, box: box },
      ];
    });
  };

  const deleteCard = (id) => {
    setAllCards((prev) => {
      return prev.filter((itm) => itm.id !== id);
    });
  };

  const changeBoxOfCard = (id, box) => {
    const newContainer = [...allCards];
    const item = newContainer.find((itm) => itm.id === id);
    item.box = box;
    setAllCards(newContainer);
  };

  const promoteCard = (id, box) => {
    if (box !== "box5") {
      const promotedCard = "box" + (+box.charAt(box.length - 1) + 1);
      changeBoxOfCard(id, promotedCard);
    }
  };

  const demoteCard = (id, box) => {
    if (box !== "box1") {
      const demotedCard = "box" + (+box.charAt(box.length - 1) - 1);
      changeBoxOfCard(id, demotedCard);
    }
  };

  return (
    <CardContext.Provider
      value={{
        allCards: allCards,
        cycleStart: cycleStart,
        todaysBoxes: todaysBoxes,
        addCard: addCard,
        deleteCard: deleteCard,
        changeBoxOfCard: changeBoxOfCard,
        promoteCard: promoteCard,
        demoteCard: demoteCard,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default CardContext;

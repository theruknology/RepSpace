import React, { useContext } from "react";
import CardContext from "../../context/CardContext";
import TopicCard from "./TopicCard";

const Course = (props) => {
  const ctx = useContext(CardContext);
  const boxCards = ctx.allCards.filter((itm) => itm.box == props.box);

  return (
    <div className="flex flex-col gap-2 h-full w-full">
      <p className="italic font-medium text-sm text-gray-500">
        Now learning cards from:<span className="text-black text-base"> Box {"#" + props.box.charAt(props.box.length - 1)}</span>
        <br/> Scroll horizontally
      </p>

      {/* Topic Cards Carousel */}
      <div className="w-full h-full overflow-x-scroll">
        <div className="flex gap-2 h-full w-fit">
          {boxCards.map((itm) => (
            <TopicCard
              key={itm.id}
              id={itm.id}
              name={itm.title}
              onPromote={() => {ctx.promoteCard(itm.id, itm.box)}}
              onDemote={() => {ctx.demoteCard(itm.id, itm.box)}}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;

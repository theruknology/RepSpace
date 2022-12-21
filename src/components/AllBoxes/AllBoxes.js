import React, { useContext } from "react";
import CardContext from "../../context/CardContext";
import BoxItem from "./BoxItem";
import PromptModal from "../UI/Modal";

const AllBoxes = (props) => {
  const ctx = useContext(CardContext);
  const cardsInBox = (box) => {
    return ctx.allCards.filter((itm) => itm.box == box);
  };

  return (
    <div className="overflow-y-scroll h-[400px] w-full">
      <div className="flex flex-col gap-4">
        <section className="w-full bg-white p-4 rounded-md drop-shadow-sm">
          <p className="font-semibold ">Box #1 Cards</p>
          <ul className="flex flex-col gap-2 text-left my-4">
            {cardsInBox("box1").map((itm) => {
              return (
                <BoxItem
                  key={itm.id}
                  onPromote={() => {
                    ctx.promoteCard(itm.id, itm.box);
                  }}
                  onDemote={() => {
                    ctx.demoteCard(itm.id, itm.box);
                  }}
                  onDelete={() => {
                    ctx.deleteCard(itm.id);
                  }}
                  title={itm.title}
                  box={itm.box}
                ></BoxItem>
              );
            })}
          </ul>
        </section>
        <section className="w-full bg-white p-4 rounded-md drop-shadow-sm">
          <p className="font-semibold ">Box #2 Cards</p>
          <ul className="flex flex-col gap-2 text-left my-4">
            {cardsInBox("box2").map((itm) => {
              return (
                <BoxItem
                  key={itm.id}
                  onPromote={() => {
                    ctx.promoteCard(itm.id, itm.box);
                  }}
                  onDemote={() => {
                    ctx.demoteCard(itm.id, itm.box);
                  }}
                  onDelete={() => {
                    ctx.deleteCard(itm.id);
                  }}
                  title={itm.title}
                  box={itm.box}
                ></BoxItem>
              );
            })}
          </ul>
        </section>
        <section className="w-full bg-white p-4 rounded-md drop-shadow-sm">
          <p className="font-semibold ">Box #3 Cards</p>
          <ul className="flex flex-col gap-2 text-left my-4">
            {cardsInBox("box3").map((itm) => {
              return (
                <BoxItem
                  key={itm.id}
                  onPromote={() => {
                    ctx.promoteCard(itm.id, itm.box);
                  }}
                  onDemote={() => {
                    ctx.demoteCard(itm.id, itm.box);
                  }}
                  onDelete={() => {
                    ctx.deleteCard(itm.id);
                  }}
                  title={itm.title}
                  box={itm.box}
                ></BoxItem>
              );
            })}
          </ul>
        </section>
        <section className="w-full bg-white p-4 rounded-md drop-shadow-sm">
          <p className="font-semibold ">Box #4 Cards</p>
          <ul className="flex flex-col gap-2 text-left my-4">
            {cardsInBox("box4").map((itm) => {
              return (
                <BoxItem
                  key={itm.id}
                  onPromote={() => {
                    ctx.promoteCard(itm.id, itm.box);
                  }}
                  onDemote={() => {
                    ctx.demoteCard(itm.id, itm.box);
                  }}
                  onDelete={() => {
                    ctx.deleteCard(itm.id);
                  }}
                  title={itm.title}
                  box={itm.box}
                ></BoxItem>
              );
            })}
          </ul>
        </section>
        <section className="w-full bg-white p-4 rounded-md drop-shadow-sm">
          <p className="font-semibold ">Box #5 Cards</p>
          <ul className="flex flex-col gap-2 text-left my-4">
            {cardsInBox("box5").map((itm) => {
              return (
                <BoxItem
                  key={itm.id}
                  onPromote={() => {
                    ctx.promoteCard(itm.id, itm.box);
                  }}
                  onDemote={() => {
                    ctx.demoteCard(itm.id, itm.box);
                  }}
                  onDelete={() => {
                    ctx.deleteCard(itm.id);
                  }}
                  title={itm.title}
                  box={itm.box}
                ></BoxItem>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AllBoxes;

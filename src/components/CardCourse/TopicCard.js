import React, { useState } from "react";

const TopicCard = (props) => {
  const [done, setDone] = useState(false);

  return (
    <div className="w-[90vw] h-fit bg-white rounded-lg py-10 px-8">
      <p className="font-medium text-gray-500">Topic</p>
      <p className="text-3xl font-bold mb-10">{props.name}</p>
      {!done && (
        <button
          onClick={() => {
            setDone(true);
          }}
          className="w-fit ml-auto bg-green-700 text-gray-100 py-2 px-4 rounded-lg hover:bg-green-900 focus:ring-4 focus:ring-green-400 focus:outline-none"
        >
          Done Studying
        </button>
      )}
      {done && (
        <>
          <p>How did it go?</p>
          <div className="flex gap-2 mt-8">
            <button
              onClick={() => {props.onPromote()}}
              className="w-fit bg-green-700 text-gray-100 py-2 px-4 rounded-lg hover:bg-green-900 focus:ring-4 focus:ring-green-400 focus:outline-none"
            >
              👍 Went well
            </button>
            <button
              onClick={() => {props.onDemote()}}
              className="w-fit bg-blue-700 text-gray-100 py-2 px-4 rounded-lg hover:bg-blue-900 focus:ring-4 focus:ring-blue-400 focus:outline-none"
            >
              ✍ Needs more practice
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TopicCard;

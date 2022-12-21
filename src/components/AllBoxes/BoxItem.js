import React, { useState } from "react";
import PromptModal from "../UI/Modal";

const BoxItem = (props) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      {showOptions && (
        <PromptModal
          onClose={() => {
            setShowOptions(false);
          }}
        >
          <p>Now in Box {"#" + props.box.charAt(props.box.length - 1)}</p>
          <p className="text-xl font-semibold">{props.title}</p>

          <div className="flex flex-col gap-2 mt-10">
            <button
              onClick={() => {
                props.onPromote();
              }}
              className="w-fit bg-blue-700 text-gray-100 py-2 px-4 rounded-lg hover:bg-blue-900 focus:ring-4 focus:ring-blue-400 focus:outline-none"
            >
              👍 Promote Card
            </button>
            <button
              onClick={() => {
                props.onDemote();
              }}
              className="w-fit bg-blue-700 text-gray-100 py-2 px-4 rounded-lg hover:bg-blue-900 focus:ring-4 focus:ring-blue-400 focus:outline-none"
            >
              ✍ Demote Card
            </button>
            <button
              onClick={() => {
                props.onDelete();
              }}
              className="w-fit bg-red-700 text-gray-100 py-2 px-4 rounded-lg hover:bg-red-900 focus:ring-4 focus:ring-red-400 focus:outline-none"
            >
              Delete Card
            </button>
          </div>
        </PromptModal>
      )}
      <button
        onClick={() => {
          setShowOptions(true);
        }}
        className="bg-gray-100 text-left py-2 px-4 rounded-sm focus:outline-none focus:ring-4 focus:ring-gray-500 font-semibold text-gray-500"
      >
        {props.title}
      </button>
    </>
  );
};

export default BoxItem;

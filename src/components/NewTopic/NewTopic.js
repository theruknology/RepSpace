import React, { useContext, useRef, useState } from "react";
import CardContext from "../../context/CardContext";

const NewTopic = (props) => {
  const nameInput = useRef();
  const [hasError, setHasError] = useState(false);
  const ctx = useContext(CardContext);

  const newTopicSubmitHandler = (event) => {
    event.preventDefault();

    if (nameInput.current.value.trim() !== "") {
      setHasError(false);

      ctx.addCard(nameInput.current.value);
      nameInput.current.value = "";
    } else {
      setHasError(true);
    }
  };

  const cancelHandler = () => {
    props.onChangeView("Dashboard");
  }

  return (
    <form onSubmit={newTopicSubmitHandler} className="flex flex-col gap-8 pt-6">
      <div className="flex flex-col gap-2">
        <label>Enter Topic Name</label>
        <input
          ref={nameInput}
          type="text"
          className="rounded-md py-1 px-2 focus:outline-none focus:ring-4 ring-blue-300 placeholder:italic placeholder:text-gray-300"
          placeholder="type here"
          minLength="2"
        />
        {hasError && (
          <p className="text-sm font-medium text-red-500">Enter valid name</p>
        )}
      </div>
      <div className="ml-auto">
        <button
          type="reset"
          className="px-4 py-2 text-red-500 font-medium"
          onClick={cancelHandler}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 rounded-md text-white focus:outline-none focus:ring-4 ring-blue-300 hover:bg-blue-800"
        >
          Add
        </button>
      </div>
      <p className="italic font-medium text-sm">
        Any new topic added from here, gets defaulted to Box 1. To better
        understand,
        <br />
        <a href="#" className="text-blue-600 underline">
          Watch this video
        </a>
      </p>
    </form>
  );
};

export default NewTopic;

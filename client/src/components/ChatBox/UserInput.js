import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { messageActions } from "../store/message-slice";

const UserInput = () => {
  const textareaRef = useRef(null);
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const dispatch = useDispatch();

  //function to scroll to the bottom when new content is added
  function scrollToBottom() {
    if (textareaRef.current) {
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }
  }

  const onChangeHandler = (event) => {
    const input = event.target.value;
    setInput(input);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const thread = [...chatLog, { user: "me", message: `${input}` }];
    setChatLog(thread);
    dispatch(messageActions.updateThread({ user: "me", message: `${input}` }));
    setInput("");
  };

  return (
    <div className="mx-10 mb-4">
      <form onSubmit={onSubmitHandler}>
        <input
          value={input}
          onChange={onChangeHandler}
          className="bg-inputGray w-full text-lg border border-botLightGray rounded-md shadow-md shadow-slate-800 focus:outline-none focus:border-gray-400 py-4 px-6"
          placeholder="Enter your question"
          rows="1"
          style={{ scrollBehavior: "smooth" }}
          ref={textareaRef}
        />
      </form>
    </div>
  );
};

export default UserInput;

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { messageActions } from "../store/message-slice";

const UserInput = () => {
  const textareaRef = useRef(null);
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [eventTriggered, setEventTriggered] = useState(0);
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
    const userInput = { user: "me", message: `${input}` };
    const thread = [...chatLog, userInput];
    setChatLog(thread);
    dispatch(messageActions.updateThread({ user: "me", message: `${input}` }));
    setInput("");

    //fetch request to the API
    const response = await fetch("http://localhost:3080", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: thread.map((message) => message.message).join("\n"),
        //message: input,
      }),
    });
    const data = await response.json();
    console.log("data");
    console.log(data.message);
    const botResponse = { user: "gpt", message: `${data.message}` };
    setChatLog([...chatLog, botResponse]);
    dispatch(messageActions.updateThread(botResponse));
  };

  const clearChatLog = () => {
    dispatch(messageActions.saveConversation(chatLog));
    setChatLog([]);
  };

  useEffect(() => {
    window.addEventListener("newChatClick", clearChatLog);
    return () => {
      window.removeEventListener("newChatClick", () => {});
    };
  }, []);

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

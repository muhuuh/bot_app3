import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Chatlog from "./Chatlog";
import UserInput from "./UserInput";

const ChatBox = () => {
  const messageStore = useSelector((state) => state.messages);
  console.log("messageStore");
  console.log(messageStore);
  const currentThread = messageStore.thread;
  const chatThread = currentThread.map((currentMessage, index) => {
    return <Chatlog key={index} message={currentMessage} />;
  });
  console.log(chatThread);
  return (
    <section className="flex flex-col flex-1 bg-botLightGray ">
      <div className="flex flex-col justify-center"></div>
      <div className="flex-grow overflow-y-auto ">{chatThread}</div>
      <UserInput />
    </section>
  );
};

export default ChatBox;

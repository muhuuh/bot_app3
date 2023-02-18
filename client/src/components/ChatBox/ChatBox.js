import React, { useRef } from "react";
import Chatlog from "./Chatlog";
import UserInput from "./UserInput";

const ChatBox = () => {
  return (
    <section className="flex flex-col flex-1 bg-botLightGray ">
      <div className="flex flex-col justify-center"></div>
      <div className="flex-grow overflow-y-auto mt-8">
        <Chatlog />
      </div>

      <UserInput />
    </section>
  );
};

export default ChatBox;

import React from "react";
import BotIcon from "../UI/Icon/BotIcon";

const Chatlog = (props) => {
  const user = props.message.user;

  return (
    <div
      className={`${
        user == "me" ? "bg-botLightGray" : " bg-chatlogGray"
      }  px-36 py-6`}
    >
      <div className="flex flex-row">
        <div className="flex justify-center bg-botLila h-12 w-12 rounded-lg ">
          <BotIcon />
        </div>
        <div className="ml-16 text-lg">{props.message.message}</div>
      </div>
    </div>
  );
};

export default Chatlog;

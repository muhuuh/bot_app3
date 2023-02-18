import React from "react";
import BotIcon from "../UI/Icon/BotIcon";

const Chatlog = () => {
  return (
    <div className=" bg-chatlogGray px-36 py-6">
      <div className="flex flex-row">
        <div className="flex justify-center bg-botLila h-12 w-12 rounded-lg ">
          <BotIcon />
        </div>

        <div className="ml-16 text-lg">Message</div>
      </div>
    </div>
  );
};

export default Chatlog;

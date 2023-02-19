import React from "react";
import MessageIcon from "../UI/Icon/MessageIcon";

const OldChat = (props) => {
  return (
    <button className="relative z-10 flex flex-row  bg-botDarkGray  w-full text-left rounded-md py-2 px-6 hover:bg-hoverGray transition duration-150 mt-4">
      <MessageIcon />
      <div className="ml-2"> {props.oldConvo} </div>
    </button>
  );
};

export default OldChat;

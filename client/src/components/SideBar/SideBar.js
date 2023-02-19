import React from "react";
import { useSelector } from "react-redux";
import PlusIcon from "../UI/Icon/PlusIcon";

const SideBar = () => {
  const messageStore = useSelector((state) => state.messages);
  console.log("messageStore side");
  console.log(messageStore);
  console.log(messageStore.conversations);
  console.log(messageStore.conversations[0]);
  const oldConvos =
    messageStore.conversations[0][0].message.substring(0, 15) + "...";
  console.log("oldConvos");
  console.log(oldConvos);

  const onClickNewHandler = () => {
    const event = new CustomEvent("newChatClick");
    console.log("event");
    console.log(event);
    window.dispatchEvent(event);
  };

  const onClickOldHandler = () => {};

  return (
    <aside className="relative w-64 bg-botDarkGray p-2">
      <button
        onClick={onClickNewHandler}
        className="relative z-10 flex flex-row border bg-botDarkGray border-gray-500 w-full text-left rounded-md py-2 px-6 hover:bg-hoverGray transition duration-150"
      >
        <PlusIcon className="mr-2" />
        <div className="ml-2">New Chat</div>
      </button>
      <button
        onClick={onClickOldHandler}
        className="relative z-10 flex flex-row border bg-botDarkGray border-gray-500 w-full text-left rounded-md py-2 px-6 hover:bg-hoverGray transition duration-150"
      >
        <div className="ml-2"> {oldConvos} </div>
      </button>
    </aside>
  );
};

export default SideBar;

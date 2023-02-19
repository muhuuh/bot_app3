import React from "react";
import { useSelector } from "react-redux";
import PlusIcon from "../UI/Icon/PlusIcon";
import OldChat from "./OldChat";

const SideBar = () => {
  const messageStore = useSelector((state) => state.messages);
  console.log("messageStore side");
  console.log(messageStore);
  console.log(messageStore.conversations);
  console.log(messageStore.conversations[0]);

  let oldConvos = [];
  const convoList = messageStore.conversations.map((convo) => {
    if (convo) {
      oldConvos = convo[1].message.substring(0, 20) + "...";
    }

    return <OldChat oldConvo={oldConvos} />;
  });

  console.log("convoList");
  console.log(convoList);

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
      <div className="mt-4">{convoList}</div>
    </aside>
  );
};

export default SideBar;

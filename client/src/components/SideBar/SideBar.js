import React from "react";
import PlusIcon from "../UI/Icon/PlusIcon";

const SideBar = () => {
  return (
    <aside className="relative w-64 bg-botDarkGray p-2">
      <button className="relative z-10 flex flex-row border bg-botDarkGray border-gray-500 w-full text-left rounded-md py-2 px-6 hover:bg-hoverGray transition duration-150">
        <PlusIcon className="mr-2" />
        <div className="ml-2">New Chat</div>
      </button>
    </aside>
  );
};

export default SideBar;

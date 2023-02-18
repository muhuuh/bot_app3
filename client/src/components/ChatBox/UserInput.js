import React, { useRef } from "react";

const UserInput = () => {
  const textareaRef = useRef(null);

  function scrollToBottom() {
    if (textareaRef.current) {
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }
  }

  return (
    <div className="mx-10 mb-4">
      <textarea
        className="bg-inputGray w-full text-lg border border-botLightGray rounded-md shadow-md shadow-slate-800 focus:outline-none focus:border-gray-400 py-4 px-6"
        placeholder="Enter your question"
        rows="1"
        style={{ scrollBehavior: "smooth" }}
        ref={textareaRef}
      />
    </div>
  );
};

export default UserInput;

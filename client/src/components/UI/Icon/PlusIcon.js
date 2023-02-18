import React from "react";

const PlusIcon = ({ style }) => {
  return (
    <div>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24.00 24.00"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#f5ebeb"
        transform="matrix(-1, 0, 0, -1, 0, 0)rotate(180)"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="#CCCCCC"
          stroke-width="0.384"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M4 12H20M12 4V20"
            stroke="#d2cbcb"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
    </div>
  );
};

export default PlusIcon;

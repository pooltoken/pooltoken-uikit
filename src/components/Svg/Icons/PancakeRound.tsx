import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <div
      style={{
        padding: 8,
        borderRadius: "50%",
        width: 30,
        height: 30,
        transform: "rotate(45deg)",
        transformOrigin: "center center  0px",
        marginRight: 5,
        backgroundColor: "rgb(72, 88, 255)",
      }}
    >
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g fill="#fff" fill-rule="evenodd">
          <path d="M4 0h12v16H0V4a4 4 0 0 1 4-4z" fill="#fff"></path>
          <path d="M16 16h16v12a4 4 0 0 1-4 4H16V16z" fill="#fff"></path>
          <path
            d="M11.5 20.5H.5v1h10v10h1v-11z"
            stroke="#fff"
            stroke-width="2"
            transform="matrix(-1 0 0 1 12 0)"
          ></path>
          <path d="M31.5.5h-11v1h10v10h1V.5z" stroke="#fff" stroke-width="2" transform="matrix(1 0 0 -1 0 12)"></path>
        </g>
      </svg>
    </div>
  );
};

export default Icon;

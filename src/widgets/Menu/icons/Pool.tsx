import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <g>
        <path d="M5,12.4V16c0,3.4,4.8,6,11,6s11-2.6,11-6v-3.6c-2.2,2.2-6.2,3.6-11,3.6S7.2,14.6,5,12.4z" />
        <path d="M5,20.4V24c0,3.4,4.8,6,11,6s11-2.6,11-6v-3.6c-2.2,2.2-6.2,3.6-11,3.6S7.2,22.6,5,20.4z" />
        <ellipse cx="16" cy="8" rx="11" ry="6" />
      </g>
    </Svg>
  );
};

export default Icon;

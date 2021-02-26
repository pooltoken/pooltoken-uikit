import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    // <Svg viewBox="0 0 24 24" {...props}>
    //   <path d="M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" />
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z"
    //   />
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z"
    //   />
    //   <path d="M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" />
    // </Svg>

    // <Svg height="800" width="1200" fill="none" viewBox="-14.4 -24 124.8 144" {...props}>
    //   <circle fill="" r="48" cy="48" cx="48" />
    //   <path
    //     fill="white"
    //     d="M34.5355 42.4676l13.4647-13.4644 13.4715 13.4715 7.8346-7.835-21.3061-21.3064-21.2995 21.2995zm-13.3672-2.303l7.8347 7.8347-7.8351 7.8351-7.8346-7.8347zm13.3672 13.3676l13.4647 13.464 13.4712-13.4708 7.8391 7.8308-.0042.004-21.3061 21.3064-21.2998-21.2994-.0109-.0108zm48.1319-5.5315l-7.8347 7.8346-7.8346-7.8346 7.8346-7.8347z"
    //   />
    //   <path fill="white" d="M55.9466 47.996h.0036l-7.9503-7.9504-7.9542 7.9542.0108.0111 7.9434 7.9434 7.954-7.9545z" />
    // </Svg>

    <Svg viewBox="0 0 2500.01 2500" {...props}>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            fill="currentColor"
            d="M764.48,1050.52,1250,565l485.75,485.73,282.5-282.5L1250,0,482,768l282.49,282.5M0,1250,282.51,967.45,565,1249.94,282.49,1532.45Zm764.48,199.51L1250,1935l485.74-485.72,282.65,282.35-.14.15L1250,2500,482,1732l-.4-.4,282.91-282.12M1935,1250.12l282.51-282.51L2500,1250.1,2217.5,1532.61Z"
          />
          <path
            className="cls-1"
            d="M1536.52,1249.85h.12L1250,963.19,1038.13,1175h0l-24.34,24.35-50.2,50.21-.4.39.4.41L1250,1536.81l286.66-286.66.14-.16-.26-.14"
          />
        </g>
      </g>
    </Svg>
  );
};

export default Icon;

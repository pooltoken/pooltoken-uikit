import React from "react";
import styled, { keyframes } from "styled-components";
import PancakeIcon from "./PancakeIcon";
import PanIcon from "./PanIcon";
import { SpinnerProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div`
  position: relative;
`;

const RotatingPancakeIcon = styled(PancakeIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const FloatingPanIcon = styled(PanIcon)`
  animation: ${float} 6s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <svg width="67" height="67" viewBox="0 0 67 67" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
        <g fill="#4858ff" fill-rule="evenodd">
          <g transform="translate(1 1)" stroke-width="2">
            <circle cx="5" cy="50" r="8">
              <animate
                attributeName="cy"
                begin="0s"
                dur="1.8s"
                values="50;5;50;50"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="cx"
                begin="0s"
                dur="1.8s"
                values="5;27;49;5"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="27" cy="5" r="8">
              <animate
                attributeName="cy"
                begin="0s"
                dur="1.8s"
                from="5"
                to="5"
                values="5;50;50;5"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="cx"
                begin="0s"
                dur="1.8s"
                from="27"
                to="27"
                values="27;49;5;27"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="49" cy="50" r="8">
              <animate
                attributeName="cy"
                begin="0s"
                dur="1.8s"
                values="50;50;5;50"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="cx"
                from="49"
                to="49"
                begin="0s"
                dur="1.8s"
                values="49;5;27;49"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </g>
      </svg>
    </Container>
  );
};

export default Spinner;

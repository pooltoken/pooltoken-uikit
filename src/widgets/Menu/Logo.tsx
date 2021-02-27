import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Flex from "../../components/Box/Flex";
import { Text } from "../../components/Text";
import { HamburgerCloseIcon, HamburgerIcon } from "./icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 156px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      {/* <LogoIcon className="mobile-icon" />
      <LogoWithText className="desktop-icon" isDark={isDark} /> */}
      <div
        style={{
          //backgroundColor: isDark ? "#04060d" : "rgba(0,0,0,0.5)",
          padding: 10,
          borderRadius: "50%",
          width: 40,
          height: 40,
          transform: "rotate(45deg)",
          transformOrigin: "center center",
          marginRight: 10,
          border: "2px solid #4858ff",
        }}
      >
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          {/* <defs>
            <linearGradient x1="0%" y1="0%" y2="100%" id="logo-a">
              <stop stop-color="#4858ff" offset="0%"></stop>
              <stop stop-color="#4858ff" stop-opacity="1" offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="0%" y1="0%" y2="100%" id="logo-b">
              <stop stop-color="#4858ff" offset="0%"></stop>
              <stop stop-color="#4858ff" stop-opacity="1" offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="0%" y1="0%" y2="100%" id="logo-c">
              <stop stop-color="#4858ff" stop-opacity="1" offset="0%"></stop>
              <stop stop-color="#4858ff" offset="55.496%"></stop>
              <stop stop-color="#4858ff" stop-opacity="1" offset="100%"></stop>
            </linearGradient>
          </defs> */}
          <g fill="#4858ff" fill-rule="evenodd">
            <path d="M4 0h12v16H0V4a4 4 0 0 1 4-4z" fill="#4858ff"></path>
            <path d="M16 16h16v12a4 4 0 0 1-4 4H16V16z" fill="#4858ff"></path>
            <path
              d="M11.5 20.5H.5v1h10v10h1v-11z"
              stroke="#4858ff"
              strokeWidth="2"
              transform="matrix(-1 0 0 1 12 0)"
            ></path>
            <path
              d="M31.5.5h-11v1h10v10h1V.5z"
              stroke="#4858ff"
              strokeWidth="2"
              transform="matrix(1 0 0 -1 0 12)"
            ></path>
          </g>
        </svg>
      </div>
      <Text fontWeight="bold">PoolToken</Text>
    </>
  );

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default Logo;

import React from "react";
import styled, { css } from "styled-components";

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
`;

const Svg = styled.svg`
  width: 3.2rem;
  height: 3.2rem;
`;

const Line = styled.path`
  fill: none;
  stroke: black;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);

  ${({ line1, opened }) =>
    line1 &&
    css`
      stroke-dasharray: ${opened ? "90 207" : "60 207"};
      stroke-dashoffset: ${opened ? "-134" : "0"};
    `}

  ${({ line2, opened }) =>
    line2 &&
    css`
      stroke-dasharray: ${opened ? "1 60" : "60 60"};
      stroke-dashoffset: ${opened ? "-30" : "0"};
    `}

  ${({ line3, opened }) =>
    line3 &&
    css`
      stroke-dasharray: ${opened ? "90 207" : "60 207"};
      stroke-dashoffset: ${opened ? "-134" : "0"};
    `}
`;

const Menu = ({ onClick, menuOpen }) => {
  return (
    <MenuButton
      className={`menu ${menuOpen ? "opened" : ""}`}
      onClick={() => {
        onClick();
      }}
      aria-expanded={menuOpen}
      aria-label="Main Menu"
    >
      <Svg viewBox="0 0 100 100">
        <Line
          className="line line1"
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          line1
          opened={menuOpen}
        />
        <Line className="line line2" d="M 20,50 H 80" line2 opened={menuOpen} />
        <Line
          className="line line3"
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          line3
          opened={menuOpen}
        />
      </Svg>
    </MenuButton>
  );
};

export default Menu;

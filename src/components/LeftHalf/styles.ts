import styled from "styled-components";
import { Col } from "antd";

export const FirstDiv = styled("div")`
  height: 50vh;
`;

export const FixedCol = styled(Col)`
  z-index: 1;
`;

export const Title = styled("h1")`
  font-size: 3em;
  color: #000000;
  width: 35vw;
  text-align: left;
  margin-top: 20vh;
  margin-left: 5vw;
`;

export const NavLink = styled("h1")`
  font-size: 2em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;
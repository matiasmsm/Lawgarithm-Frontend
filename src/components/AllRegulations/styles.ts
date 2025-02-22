import styled, { css } from "styled-components";
import { Col, Row } from "antd";


export const SearchBarDiv = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 5vh;
  margin-bottom: 3vh;
`;


export const CustomDiv = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  grid-template-rows: auto; /* Rows adjust dynamically */
  width: 64vw;
  margin: auto;
`;

export const IntroDiv = styled("div")`
  height: 20vh;
  width: 30vw;
  margin-top: 14vh;
  margin-left: 10vw;
`;

export const RegDiv = styled("div")`
  border: 1px solid #861388;
  border-radius: 10px;
  width: 21vw;
  margin: auto;
  margin-top: 1vh;
  height: 15vw;
  overflow-y: auto; /* Enable vertical scrolling when content exceeds max-height */
  cursor: pointer;
  &:hover {
    border: 2px solid #68B684;
    scale: 1.03;
  }
`;

export const Title = styled("a")`
  font-size: 1em;
  margin: 1vh;
  margin-top: 3vh;
  color: #1b1a1a;
  text-align: justify;
`;

export const Country = styled("h1")`
  font-size: 1em;
  margin:auto;
  margin-left: 1vw;
  margin-top: 1vh;
  color: #979797;
`;

export const Summary = styled("h1")`
  margin-left: 1vw;
  margin-top: 1vh;
  font-size: 0.8em;
  color: #979797;
`;

export const PaginationDiv = styled("div")`
  width: 20vw;
  margin: auto;
  margin-top: 2vh;
`;

export const ArrowDiv = styled("div")`
  text-align: center;
  color: #68B684;
  cursor: pointer;
  &:hover {
    scale: 1.1;
    color: #861388;
  }
`;
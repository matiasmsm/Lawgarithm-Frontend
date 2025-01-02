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
  border: 1px solid #68B684;
  border-radius: 10px;
  width: 21vw;
  margin: auto;
  margin-top: 1vh;
  height: 15vw;
  overflow-y: auto; /* Enable vertical scrolling when content exceeds max-height */
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    scale: 1.01;
  }
`;

export const Title = styled("a")`
  font-size: 1.9em;
  margin: auto;
  margin-top: 10vh;
  max-width: 60vw;
  color: #68B684;
  text-align: justify;
`;

export const Country = styled("h1")`
  font-size: 1.3em;
  margin:auto;
  margin-top: 1vh;
  color: #979797;
`;

export const Summary = styled("h1")`
  width: 60vw;
  margin: auto;
  margin-top: 8vh;
  font-size: 1em;
  color: #1b1a1a;
  text-align: justify;
  line-height: 1.5;
`;


export const Date = styled("h1")`
  margin: auto;
  margin-top: 1vh;
  font-size: 1em;
  color: #1b1a1a;
`;

export const Entity = styled("h1")`
  margin-left: 1vw;
  margin-top: 1vh;
  font-size: 0.8em;
  color: #979797;
`;

import styled, { css } from "styled-components";
import { Col, Row } from "antd";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  transition: all 0.3s ease;
`;

export const CustomRow = styled(Row)`
  margin-bottom: 5vh;
`;

export const Column = styled(Col)`
  width: 33.33%;
  height: 300px;
  transition: all 1s ease;

  &.left {
    transform: translateX(0);
  }

  &.middle {
    transform: translateX(100%);
  }

  &.right {
    transform: translateX(125%);
  }

  &.pushed {
    transition: all 1s ease;
    &.left {
      transform: translateX(-100%);
    }
    &.middle {
      transform: translateX(0);
      z-index: 1;
    }
    &.right {
      transform: translateX(0);
    }
  }
`;

export const CustomCol = styled(Col)`
  border: 3px solid #000000;
  border-radius: 6px;
  text-align: center;
  height: 20vh;
  padding-top: 4vh;
  transition: all 0.3s ease; /* Add transition for smooth animation */
  box-shadow: 0 6px 30px rgb(0,0,0);

  &:hover {
    background-color: rgba(231, 128, 124, 0.8); /* Change background color with opacity */
    transform: scale(1.1); /* Scale up the element */
  }
  @media (min-width: 250px) and (max-width: 600px) {
    height: 10vh;
    padding-top: 1vh;
  }
`;


export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const H6 = styled("h6")`
  font-size: 1.2em;
  color: #000000;
  @media (min-width: 250px) and (max-width: 600px) {
   font-size: 0.8em;
  }
`;

export const FixedCol = styled(Column)`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh; 
  background: #0d0200;
  width: 127%;
`;
export const FirstDiv = styled("div")`
  height: 10vh;
`;

export const SectionDiv = styled("div")`
  height: 50vh;
  width: 30vw;
  margin: 10vh auto 30vh;`
;

export const CustomDiv = styled("div")`
  padding: 10%;
  margin-top: 20%;
  height: 100%; /* Ensure the div takes up full height */
`;

export const IntroDiv = styled("div")`
  height: 50vh;
  width: 40vw;
  margin: 0vh auto 30vh;
  margin-left: 10vw;
`;

export const Title = styled("h1")`
  font-size: 2.8em;
  color: #0d0200;
  width: 35vw;
  text-align: left;
  margin-top: 20vh;
  margin-left: 5vw;
`;

export const TryTitle = styled("h1")`
  font-size: 3em;
  color: #00000;
  width: auto;
  margin:auto;
  text-align: center;
  margin-top: -10vh;
  padding-top: 15vh;
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

export const CustomImg = styled("img")`
  display: block; /* Ensure the image is treated as a block element */
  margin: 10vh auto 30vh; /* Center the image horizontally and add margin to the top */
  border-radius: 5px;
  transition: width 0.9s ease-in-out; /* Smooth transition effect */

  &:hover {
    transition: width 0.9s ease-in-out; /* Smooth transition effect */
  }
`;

export const CustomImgMain = styled("img")`
  display: block; /* Ensure the image is treated as a block element */
  margin: 10vh auto 30vh; /* Center the image horizontally and add margin to the top */
  border-radius: 5px;
  transition: width 0.9s ease-in-out; /* Smooth transition effect */

  &:hover {
    transition: width 0.9s ease-in-out; /* Smooth transition effect */
    cursor: pointer; /* Change cursor to pointer on hover */
  }
`;

export const ScrollableCol = styled(Column)`
  overflow-y: scroll;
  height: 100vh;
  background: #0d0200;
`;

export const SecondScrollableCol = styled(Column)`
  overflow-y: scroll;
  height: 100vh; /* Set the height to cover the entire viewport */
  /* Other styling properties as needed */
  background: #0d0200;
`;

export const TitleConstruction = styled("h1")`
  font-size: 1.4em;
  margin-top: 10vh;
  margin-left: 4vw;
  font-weight: bold;
  margin-bottom: -2vh;
  color: #0d0200;
`;

export const SubtitleConstruction = styled("h3")`
  font-style: italic;
  font-size: 1em;
  margin-top: 2vh;
  margin-left: 4vw;
  margin-bottom: -2vh;
`;

export const Brand = styled("h1")`
  font-size: 8em;
  margin:auto;
  z-index: 9999;
  margin-left: 35.8vw;
  margin-right: -65.5vw;
  font-weight: bold;
  color: #ffffff;
`;

export const CircleDiv= styled("div")`
  height: 5vw;
  width: 5vw;
  margin-left: 2vw;
  margin-top: 2vh;
  border: 1px solid #000000;
  padding-left: 0.7vw;
  padding-top: 0.7vw;
  border-radius: 50%;
  margin-bottom: -4vh;
`;

export const ArrowDownDiv= styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  color: #000000;
`;

export const SignupDiv= styled("div")`
  margin-top: -50vh;
  margin-left: 10vw;
`;

export const MapDiv= styled("div")`
  margin-top: 15vh;
`;

export const InstructionDiv= styled("div")`
  margin-top: 10vh;
  margin-left: 8vh;
  margin-bottom: 10vh;
`;

export const GenerateButtonDiv= styled("div")`
  margin-top: 10vh;
  margin-left: 8vh;
  text-align: center;
  margin-bottom: 15vh;
  padding-bottom: 15vh;

`;

export const LogoDiv= styled("div")`
  margin-top: 10vh;
  margin-left: 9vw;
  margin-bottom: 4vh;
`;

export const TryItDiv =  styled("div")`
  background: #F0A202;
`;

export const IntroRow =  styled("div")`
  margin-top: -10vh;
  margin-bottom: 10vh;
`;
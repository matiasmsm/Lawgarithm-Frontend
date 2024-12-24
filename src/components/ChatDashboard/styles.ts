import styled from "styled-components";


export const SugestionsContainer = styled.div`
  padding-left: 30vh;
  padding-right: 30vh;
  padding-top: 20vh;
`;

export const LoadingDiv = styled.div`
  text-align: center;
  margin-top: 15vh;
`;

export const PrimaryChoiseDiv = styled.div`
  padding-top: 2vh;
  border-radius: 7px;
  margin: 2vw;
  height: 12vh;
  width: 10vw;
  text-align: center;
  cursor:pointer;
  background: #fa826d;
  transition: box-shadow 0.3s ease, transform 0.3s ease; /* Smooth transition */

  &:hover,
  &:active,
  &:focus {
    color: #0d0200;
    transform: scale(1.05); /* Slightly scale up the element */
    box-shadow: 0 8px 15px #0d0200; /* Shadow effect */
  }
`;

export const SecondaryChoiseDiv = styled.div`
  padding-top: 2vh;
  border-radius: 7px;
  margin: 2vw;
  height: 12vh;
  width: 10vw;
  text-align: center;
  cursor:pointer;
  background: #26a506;
  transition: box-shadow 0.3s ease, transform 0.3s ease; /* Smooth transition */

  &:hover,
  &:active,
  &:focus {
    color: #0d0200;
    transform: scale(1.05); /* Slightly scale up the element */
    box-shadow: 0 8px 15px #0d0200; /* Shadow effect */
  }
`;

export const TertiaryChoiseDiv = styled.div`
  padding-top: 2vh;
  border-radius: 7px;
  margin: 2vw;
  height: 12vh;
  width: 10vw;
  text-align: center;
  cursor:pointer;
  background: #37f87b;
  transition: box-shadow 0.3s ease, transform 0.3s ease; /* Smooth transition */

  &:hover,
  &:active,
  &:focus {
    color: #0d0200;
    transform: scale(1.05); /* Slightly scale up the element */
    box-shadow: 0 8px 15px #0d0200; /* Shadow effect */
  }
`;
export const ChoiseTitle = styled.h3`
  font-size: 1.2em;
  margin: auto;
  text-align: center;
  margin-bottom: 5vh;
  color: #0d0200;
`;

export const IconDiv = styled.div`
  color: #0d0200;
`;

export const ChatContainer = styled.div`
  width: 55vw;
  margin: auto;
`;

export const InputContainer = styled.div`
  position: fixed;
  bottom: 7vh; /* Align it to the bottom */
`;

export const ChatInput = styled.input`
  width: 50vw;
  height: 60px;
  padding-left: 50px;
  padding-right: 10px;
  background-color: #1b0905;
  border: 1px solid #fdd2cf;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  color: #fdd2cf;

  &:focus {
    border-color: #fdd2cf; /* Keep the same border color on focus */
    background-color: rgba(10, 10, 10, 0.2); /* Prevent background change */
    box-shadow: none; /* Remove any focus-related box-shadow */
  }
`;

// Button styled to be inside the input
export const SendButton = styled.button`
  position: absolute;
  right: 2vw;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  color: #37f87b;
  outline: none;
  padding: 0;

  &:hover,
  &:focus {
    color: rgba(240, 237, 238, 0.4);
  }
`;

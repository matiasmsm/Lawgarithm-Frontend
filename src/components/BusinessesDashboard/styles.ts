import styled from "styled-components";



export const BusinessesContainer = styled.div`
  padding: 20vh;
`;

export const ChoiseDiv = styled.div`
  margin-top: 2vh;
  border: 1px solid #fdd2cf;
  border-radius: 7px;
  margin: 2vw;
  height: 25vh;
  width: 20vw;
  text-align: center;
  cursor:pointer;
  background: transparent;
  &:hover,
  &:active,
  &:focus {
    color: #0d0200;
    transform: scale(1.1); /* Scale up the element */
    border: 3px solid #fdd2cf;
    background: transparent;
  }
`;

export const ChoiseTitle = styled.h3`
  font-size: 1.8em;
  margin: auto;
  text-align: center;
  margin-bottom: 5vh;
  color: #fdd2cf;
`;

export const IconDiv = styled.div`
  margin-top: 5vh;
  color: #fdd2cf;
`;
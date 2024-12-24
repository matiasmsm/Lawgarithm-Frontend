import styled from "styled-components";


export const Title = styled("h2")`
  font-size: 2em;
  margin-left: 5vw;
  margin-top: 5vh;
`;

export const Content = styled("p")`
  margin-top: 1.5rem;
`;

export const Container = styled("div")`
  position: relative;
  height: 90vh;
  text-align: center;
`;

export const TextWrapper = styled("div")`
  border-radius: 3rem;
  max-width: 400px;
`;


export const CustomImg = styled("img")`
  margin-top: 10vh;
  cursor: url('/crosshair.cur'), crosshair;
`;
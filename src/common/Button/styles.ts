import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background:  #fa826d;;
  color: ${(p) => (p.color ? "#0d0200" : "#0d0200")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 2px solid #000000;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 0.625rem;
  margin-right: 3vw;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 6px 30px rgb(0,0,0);
  height:5vh;

  &:hover,
  &:active,
  &:focus {
    color: #0d0200;
    background: rgba(240,237,238, 0.6);
    transform: scale(1.1); /* Scale up the element */
  }
`;

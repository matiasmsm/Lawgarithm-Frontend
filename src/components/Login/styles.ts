import styled from "styled-components";

export const LoginDiv = styled("div")`
    background: #0d0200;
    display: fixed;
    margin-left: 45vw;
    width: 65vw;
    padding: auto;
`;

export const FormGroup = styled("form")`
    height: 70vh;
    width: 50vw;
    margin-top: 20vh;
    align: center;
    margin-left: 10vw;
  @media only screen and (max-width: 1045px) {
    max-width: 100%;
  }
`;

export const Span = styled("span")<any>`
  display: block;
  font-weight: 600;
  color: #ffffff;
  height: 0.775rem;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  margin-right: 30vw;
  color: #fdd2cf;
  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;

export const H1 = styled("h1")`
  font-size: 2em;
  color: #0000000;
`;

export const SocialDiv = styled("div")`
  width: auto;
  margin:auto;
  margin-top: 15vh;
  align: center;
  position: fixed;
  margin-left: 15vw;
  margin-bottom: 5vh;
`;

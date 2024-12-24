import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fdd2cf;
  color: #0d0200;
  height:100vh;
`;

export const FormDiv = styled.div`
  margin-top: 10vh;
`;

export const QuestionDiv = styled.div`
  width: 60vw;
  height: 70vh;
  padding-top: 10vh;
`;


export const Input = styled.input`
  margin-bottom: 1vh;
  height: 5vh;
  width: 40vw;
  background-color: inherit; /* Ensures the background color is inherited from the parent */
  color: inherit; /* Ensures the text color is inherited from the parent */
  border: 1px solid #0d0200; /* Adjust this to your desired border style */
  padding: 5px; /* Adjust padding if necessary */
  box-sizing: border-box;
  font-size: 1.7em;

  &:focus,
  &:hover,
  &:active {
    background-color: inherit;
    color: inherit;
    border: 1px solid #ccc;
    outline: none; /* Removes the default outline */
  }

  &::placeholder {
    color: #aaa; /* Style for placeholder text */
    opacity: 1; /* Ensures the placeholder has full opacity */
  }
`;

export const LeftButton = styled.button`
  background: #fdd2cf;
  border: none;
  cursor: pointer;
  margin-left: -40vh;
  float: left;
  margin-top: 15vh;
  &:hover{
    background-color: #fdd2cf; /* Change background color with opacity */
    transform: scale(1.3); /* Scale up the element */
  }
`;

export const RightButton = styled.button`
  background: #fdd2cf;
  border: none;
  cursor: pointer;
  margin-right: -40vh;
  float: right;
  margin-top: 15vh;
  &:hover{
    background-color: #fdd2cf; /* Change background color with opacity */
    transform: scale(1.3); /* Scale up the element */
  }
`;

export const SelectInput = styled.select`
  height: 6vh;
  font-size: 1.4em;
  background: #fdd2cf;
  border: 1px solid #0d0200;
  border-radius: 4px;
  cursor: pointer;
`;

export const H6 = styled.h1`
  margin-top: 2vh;
  font-size: 1.5em;
  color: #fdd2cf;
`;

export const CheckboxDiv = styled.div`
  margin-top: 10vh;
`;

export const Checkbox = styled.input`
  transform: scale(1.5);
  margin-top: 2.1vh;
  border: none;
  cursor: pointer;
  &:focus, &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`;

export const Label = styled.label`
  margin-top: 2vh;
  font-size: 2.3em;
  color: #0d0200;
`;

export const SubmitDiv = styled.div`
  margin-top: 10vh;
`;

export const SubmitButton = styled.button`
  background: #fdd2cf;
  border: 1px solid #0d0200;
  border-radius: 4px;
  cursor: pointer;
  height: 7vh;
  margin-top: -10vh;
  font-size: 1.7em;
  &:hover{
    background-color: rgba(240,237,238, 0.5); /* Change background color with opacity */
    transform: scale(1.1); /* Scale up the element */
  }
`;
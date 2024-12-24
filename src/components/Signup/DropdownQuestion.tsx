// src/components/Question.tsx
import React from 'react';
import { QuestionDiv, Label, Input } from './styles';
import { ReactTyped } from "react-typed";


interface QuestionProps {
  question: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Question: React.FC<QuestionProps> = ({ question, onChange, value }) => {
  return (
    <QuestionDiv>
        <ReactTyped strings={[question]} typeSpeed={30} style={{ color: "#000000", fontSize: "2em" }}/>
        <Input type="text" value={value} onChange={onChange} />
    </QuestionDiv>
  );
};

export default Question;

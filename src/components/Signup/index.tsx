import React, { useState } from 'react';
import Question from './Question';
import { Form, LeftButton, RightButton, SubmitButton } from './styles';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { signup } from '../../api';

const questions = [
  { question: "Let's do this together", type: "Welcome" as const, options: [] },
  { question: "Let's get to know each other", type: "basicinformation" as const, options: [] },
  { question: "What is your main goal", type: "goal" as const, options: [] },
  { question: "Ready to join us?", type: "end" as const, options: [] }
];

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({
    name: '',
    email: '',
    password: '',
    country: '',
    businessGoal: ''
  });

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleChange = (field: string, value: string) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await signup(answers.name, answers.email, answers.password, answers.country, answers.businessGoal);
      alert('Account created succesfully!');
      navigate("/dashboard");
    } catch (error) {
      console.error('Error creating an account', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <Form>
      <Question
        question={questions[currentQuestion].question}
        type={questions[currentQuestion].type}
        options={questions[currentQuestion].options}
        onChange={handleChange}
        value={answers}
      />
      {currentQuestion === questions.length - 1 ? (
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      ) : (
        <></>
      )}
      <div className="navigation">
        {currentQuestion > 0 && (
          <LeftButton onClick={handlePrevious}><FaArrowLeft size={38} /></LeftButton>
        )}
        {currentQuestion < questions.length - 1 ? (
          <RightButton onClick={handleNext}><FaArrowRight size={38} /></RightButton>
        ) : (
          <></>
        )}
      </div>
    </Form>
  );
};

export default Signup;

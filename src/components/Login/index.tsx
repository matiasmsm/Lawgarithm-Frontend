import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';

import { Row, Col, message } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { LoginProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { LoginDiv, FormGroup, Span, ButtonContainer, H1, SocialDiv } from "./styles";

import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';

import { UsernameContext } from "../../UsernameContext";
import { login, checkAuthentication } from "../../api";

interface Props {
    t: any;
  }
  
const Login = ({ t }: Props) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    validate
  ) as any;

  const navigate = useNavigate();

  const { username, setUsername } = useContext(UsernameContext);
  const [passwordShown, setPasswordShown] = useState(false);

  const [isHoveredGoogle, setIsHoveredGoogle] = useState(false);
  const [isHoveredLinkedIn, setIsHoveredLinkedIn] = useState(false);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
        <Span erros={errors[type]}>{ErrorMessage}</Span>
    );
  };

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    try {
      const response = await login(values.email, values.password);
      const responseData = response.data;
      const statusCode = response.status;
      if (statusCode === 200) {
        setUsername(values.email);
        message.success('Login successfull');
        navigate("/dashboard");
      } else {
        message.error('Invalid email or password');
      } 
    } catch (error) {
      console.error(error); // Handle login error
      message.error('Invalid email or password');
    }
  };

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };


  return (
    <LoginDiv>
      <H1>Login</H1>
      <Row>
        <SocialDiv>
            <FaGoogle
            size={24}
            style={{
            width: '5vw',
            height: '4vh',
            padding: '2px',
            marginRight: '2vw',
            border: '1px solid',
            borderRadius: '5px',
            backgroundColor: isHoveredGoogle ? 'lightblue' : 'white', // Change background color on hover
            }}
            onMouseEnter={() => setIsHoveredGoogle(true)}
            onMouseLeave={() => setIsHoveredGoogle(false)}
        />
        <FaLinkedin
            size={24}
            style={{
            width: '5vw',
            height: '4vh',
            padding: '2px',
            border: '1px solid',
            borderRadius: '5px',
            backgroundColor: isHoveredLinkedIn ? 'lightblue' : 'white', // Change background color on hover
            }}
            onMouseEnter={() => setIsHoveredLinkedIn(true)}
            onMouseLeave={() => setIsHoveredLinkedIn(false)}
        />
        </SocialDiv>
      </Row>
      <Row>
        <FormGroup autoComplete="on" onSubmit={handleLogin}>
          <Col span={12}>
            <Input
              type="text"
              name="email"
              placeholder="Email"
              value={values.email || ""}
              onChange={handleChange}
            />
            <ValidationType type="email" />
          </Col>
          <Col span={12} style={{ display: "flex", alignItems: "center" }}>
                <Input
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={values.password || ""}
                  onChange={handleChange}
                />
                <ValidationType type="password" />
                {passwordShown === true &&(
                  <AiFillEyeInvisible size={22} onClick={() => togglePassword()} style={{ marginTop: "4vh" }}/>
                )}
                {passwordShown === false &&(
                  <AiFillEye size={22} onClick={() => togglePassword()} style={{ marginTop: "4vh" }}/>
                )}
              </Col>
          <ButtonContainer>
            <Button name="submit">{t("Login")}</Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button name="submit">{t("Sign up")}</Button>
          </ButtonContainer>
        </FormGroup>
      </Row>
    </LoginDiv>
  );
};

export default withTranslation()(Login);

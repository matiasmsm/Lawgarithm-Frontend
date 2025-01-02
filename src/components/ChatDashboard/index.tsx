import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { SugestionsContainer, ChatContainer, PrimaryChoiseDiv, 
  SecondaryChoiseDiv, TertiaryChoiseDiv, ChoiseTitle, IconDiv, ChatInput, SendButton,
   InputContainer, LoadingDiv, ChatDiv} from './styles';
import { Row, Col, message } from "antd";

import { ask_regulation } from '../../api';
import { CircularProgress } from '@mui/material';
import { ReactTyped } from "react-typed";

import { IoStorefrontOutline } from "react-icons/io5";
import { RiFlowChart } from "react-icons/ri";
import { IoMdSend } from "react-icons/io";
import { RiToolsFill } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoBulbOutline } from "react-icons/io5";




type Message = {
  sender: "user" | "bot";
  text: string;
}

interface BusinessType {
  id: number;
  title: string;
  industryId: number;
  createdAt: string;
  updatedAt: string;
}

interface Business {
  id: number;
  title: string;
  location: string;
  businessId: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
  templateId?: number | null;
  businessType: BusinessType;
}


const ChatDashboard: React.FC = () => {
  const [isSugestionsOpen, setIsSugestionsOpen] = useState(true);
  const [isResponseOpen, setIsResponseOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [chatResponse, setChatResponse] = useState<string>("");

  const handleSetLoading = () => {
    setIsSugestionsOpen(false);
    setIsResponseOpen(false);
    setLoading(true);
  };

  async function handleSendMessage(event?: React.FormEvent) {
    if (event) {
      event.preventDefault();
    }
  
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setIsSugestionsOpen(false);
      setIsResponseOpen(false);      
      handleSetLoading();
      try {
        const response = await ask_regulation(input);
        const statusCode = response.status;
        if (statusCode === 200) {
          const responseData = response.data;
          setChatResponse(responseData.answer);
          setIsResponseOpen(true);
        } else {
          message.error('There was an error');
        } 
      } catch (error) {
        console.error(error);
        message.error('There was an error');
      } finally {
        setLoading(false);
      }
    }
  }
  

  return (
    <>
      {isSugestionsOpen && (
        <SugestionsContainer>
          <Row>
            <Col span={8}>
              <PrimaryChoiseDiv>
                <IconDiv><RiToolsFill size={32}/></IconDiv>
                <ChoiseTitle>Create</ChoiseTitle>
              </PrimaryChoiseDiv>
            </Col>
            <Col span={8}>
              <SecondaryChoiseDiv>
                <IconDiv><MdOutlineExplore size={32}/></IconDiv>
                <ChoiseTitle>Explore</ChoiseTitle>
              </SecondaryChoiseDiv>
            </Col>
            <Col span={8}>
              <TertiaryChoiseDiv>
                <IconDiv><IoStorefrontOutline size={32}/></IconDiv>
                <ChoiseTitle>Manage</ChoiseTitle>
              </TertiaryChoiseDiv>
            </Col> 
          </Row>
          <Row>
            <Col span={8}>
              <TertiaryChoiseDiv>
                <IconDiv><IoSettingsSharp size={32}/></IconDiv>
                <ChoiseTitle>Settings</ChoiseTitle>
              </TertiaryChoiseDiv>
            </Col>
            <Col span={8}>
              <PrimaryChoiseDiv>
                <IconDiv><RiFlowChart size={32}/></IconDiv>
                <ChoiseTitle>Plan</ChoiseTitle>
              </PrimaryChoiseDiv>
            </Col>
            <Col span={8}>
              <SecondaryChoiseDiv>
                <IconDiv><IoBulbOutline size={32}/></IconDiv>
                <ChoiseTitle>Ideas</ChoiseTitle>
              </SecondaryChoiseDiv>
            </Col> 
          </Row>
        </SugestionsContainer>
      )}
      {loading && (
        <LoadingDiv>
          <CircularProgress size={58} style={{color:'#07ca4b'}} />
        </LoadingDiv>
      )}
      {isResponseOpen && (
        <div>
          <ChatDiv>
            <ReactTyped
              strings={[chatResponse]}
              typeSpeed={1}          // Extremely fast typing speed
              backSpeed={0}          // No backspace effect
              startDelay={0}         // No delay before typing starts
              showCursor={false}     // Optionally hide the cursor for a cleaner effect
            />
          </ChatDiv>
        </div>
      )}
      <ChatContainer>
        <InputContainer>
          <ChatInput
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type here..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage(); // Call the same function as the button
              }
            }}
          />
          <SendButton onClick={handleSendMessage}><IoMdSend size={32}/></SendButton>
        </InputContainer>
      </ChatContainer>
    </>
  );
};

export default withTranslation()(ChatDashboard);

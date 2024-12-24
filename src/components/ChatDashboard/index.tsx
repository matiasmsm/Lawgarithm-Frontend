import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { SugestionsContainer, ChatContainer, PrimaryChoiseDiv, 
  SecondaryChoiseDiv, TertiaryChoiseDiv, ChoiseTitle, IconDiv, ChatInput, SendButton,
   InputContainer, LoadingDiv } from './styles';
import { Row, Col, message } from "antd";
import { chat_query } from '../../api';
import { CircularProgress } from '@mui/material';


import BusinessesDashboard from "../BusinessesDashboard"

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
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isSugestionsOpen, setIsSugestionsOpen] = useState(true);
  const [isExploreOpen, setIsExploreOpen] = useState(true);
  const [isManageOpen, setIsManageOpen] = useState(false);
  const [isBusinessesOpen, setIsBusinessesOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [currentBusiness, setCurrentBusiness] = useState<any>(null);

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSetLoading = () => {
    setIsSugestionsOpen(false);
    setIsBusinessesOpen(false);
    setLoading(true);
  };

  const handleCreateClick = () => {
    setIsCreateOpen(true);
    setIsSugestionsOpen(false);
    setIsBusinessesOpen(false);
  };

  const handleBusinessesClick = () => {
    setIsSugestionsOpen(false);
    setIsBusinessesOpen(true);
  };

  const handleOpenManage = (initialBusiness = null) => {
    setIsSugestionsOpen(false);
    setIsManageOpen(true);
    setCurrentBusiness(initialBusiness);
  };

  const handleCreateFormSubmit = (data: Business) => {
    setIsCreateOpen(false); // Close the form
    setIsManageOpen(true);  // Open the manage view
    setCurrentBusiness(data); // Set the current business data
  };

  async function handleSendMessage(event?: React.FormEvent) {
    if (event) {
      event.preventDefault();
    }
  
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setIsSugestionsOpen(false);
      setIsBusinessesOpen(false);
      setIsManageOpen(false);
      handleSetLoading();
      try {
        const response = await chat_query(input);
        const statusCode = response.status;
        if (statusCode === 200) {
          const responseData = response.data;
          const type = responseData.type;
          const specification = responseData.specification;
          if (type === 'Manage') {
            handleOpenManage(specification);
          }
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
              <PrimaryChoiseDiv onClick={handleCreateClick}>
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
              <TertiaryChoiseDiv onClick={handleBusinessesClick}>
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
      {isBusinessesOpen && (
        <BusinessesDashboard/>
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

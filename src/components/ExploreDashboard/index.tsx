import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { ExploreContainer, ChoiseDiv, ChoiseTitle, IconDiv } from './styles';
import { Row, Col } from "antd";

import BusinessesDashboard from "../BusinessesDashboard"

import { IoStorefrontOutline } from "react-icons/io5";
import { RiFlowChart } from "react-icons/ri";




const ExploreDashboard: React.FC = () => {
  const [isExploreOpen, setIsExploreOpen] = useState(true);
  const [isBusinessesOpen, setIsBusinessesOpen] = useState(false);

  const handleBusinessesClick = () => {
    setIsExploreOpen(false);
    setIsBusinessesOpen(true);
  };


  return (
    <>
    {isBusinessesOpen && (
      <BusinessesDashboard/>
    )}
    {isExploreOpen && (
      <ExploreContainer>
        <Row>
          <Col span={12}>
            <ChoiseDiv onClick={handleBusinessesClick}>
              <IconDiv><IoStorefrontOutline size={52}/></IconDiv>
              <ChoiseTitle>Businesses</ChoiseTitle>
            </ChoiseDiv>
          </Col>
          <Col span={12}>
            <ChoiseDiv>
              <IconDiv><RiFlowChart size={52}/></IconDiv>
              <ChoiseTitle>Templates</ChoiseTitle>
            </ChoiseDiv>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <ChoiseDiv>
              <ChoiseTitle></ChoiseTitle>
            </ChoiseDiv>
          </Col>
          <Col span={12}>
            <ChoiseDiv>
              <ChoiseTitle></ChoiseTitle>
            </ChoiseDiv>
          </Col>
        </Row>
      </ExploreContainer>
    )}
    </>
  );
};

export default withTranslation()(ExploreDashboard);

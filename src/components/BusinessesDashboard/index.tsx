import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { BusinessesContainer, ChoiseDiv, ChoiseTitle, IconDiv } from './styles';
import { Row, Col } from "antd";
import { IoStorefrontOutline } from "react-icons/io5";
import { get_all_userbusinesses } from '../../api';


const BusinessesDashboard: React.FC = () => {
  const [businesses, setBusinesses] = useState<any[]>([]);

  useEffect(() => {
    async function fetchBusinesses() {
      try {
        const response = await get_all_userbusinesses();
        setBusinesses(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBusinesses();
  }, []);

  const renderBusinessRows = () => {
    const rows = [];
    for (let i = 0; i < businesses.length; i += 3) {
      rows.push(
        <Row key={i}>
          <Col span={8}>
            <ChoiseDiv>
              <IconDiv><IoStorefrontOutline size={52}/></IconDiv>
              <ChoiseTitle>{businesses[i]?.title || 'Business'}</ChoiseTitle>
            </ChoiseDiv>
          </Col>
          <Col span={8}>
            {businesses[i + 1] && (
              <ChoiseDiv>
                <IconDiv><IoStorefrontOutline size={52}/></IconDiv>
                <ChoiseTitle>{businesses[i + 1]?.title || 'Business'}</ChoiseTitle>
              </ChoiseDiv>
            )}
          </Col>
          <Col span={8}>
            {businesses[i + 2] && (
              <ChoiseDiv>
                <IconDiv><IoStorefrontOutline size={52}/></IconDiv>
                <ChoiseTitle>{businesses[i + 2]?.title || 'Business'}</ChoiseTitle>
              </ChoiseDiv>
            )}
          </Col>
        </Row>
      );
    }
    return rows;
  };

  return (
    <BusinessesContainer>
      {renderBusinessRows()}
    </BusinessesContainer>
  );
};

export default withTranslation()(BusinessesDashboard);

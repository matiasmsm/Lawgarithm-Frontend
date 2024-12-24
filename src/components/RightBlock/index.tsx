import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import { Container, CustomImg } from "./styles";
import {Col, Row} from "antd";

interface Props {
  title: string;
  content: string;
  background_color: string;
  img_src: string;
  width: string;
  height: string;
  t: any;
}

const RightBlock = ({ title, content, background_color, img_src, width, height, t }: Props) => {
  const [showLosVilos, setShowLosVilos] = useState(false);
  const [showPrisma, setShowPrisma] = useState(false);
  const [showCascada, setShowCascada] = useState(false);
  const [showLosPensamientos, setShowLosPensamientos] = useState(false);

  const handleCustomImgClick = (clickedTitle: string) => {
    if (clickedTitle === "Casa Los Vilos"){
      setShowLosVilos(true);
      setShowPrisma(false);
      setShowCascada(false);
      setShowLosPensamientos(false);
    } else if (clickedTitle === "Casa Prisma"){
      setShowLosVilos(false);
      setShowPrisma(true);
      setShowCascada(false);
      setShowLosPensamientos(false);
    } else if (clickedTitle === "Casa Cascada"){
      setShowLosVilos(false);
      setShowPrisma(false);
      setShowCascada(true);
      setShowLosPensamientos(false);
    } else if (clickedTitle === "Casa Los Pensamientos"){
      setShowLosVilos(false);
      setShowPrisma(false);
      setShowCascada(false);
      setShowLosPensamientos(true);
    }
  };

  return (
    <Container style={{ backgroundColor: background_color }}>
      {/* Pass the title as an argument using an arrow function */}
      <label title={title}>
        <CustomImg src={`/img/svg/${img_src}`} width={width} height={height} onClick={() => handleCustomImgClick(title)} />
      </label>
      {showLosVilos && (
        <Row>
          <Col>
          </Col>
        </Row>
      )}
      {showPrisma && (
        <Row>
        {/* Your content for the other element */}
        </Row>
      )}
      {showCascada && (
        <Row>
        {/* Your content for the other element */}
        </Row>
      )}
      {showLosPensamientos && (
        <Row>
        {/* Your content for the other element */}
        </Row>
      )}
    </Container>
  );
};

export default withTranslation()(RightBlock);

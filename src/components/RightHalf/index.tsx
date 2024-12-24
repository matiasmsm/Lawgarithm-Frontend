import { lazy,  useState } from "react";
import { withTranslation } from "react-i18next";
import { ScrollableCol, CustomImg, AnimatedSecondDiv } from "./styles";
import { Row, Col } from "antd";

interface Props {
  t: any;
}

const RightHalf = ({ t }: Props) => {
  const [showFirstDiv, setShowFirstDiv] = useState(true);
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [showLosVilos, setShowLosVilos] = useState(false);
  const [showPrisma, setShowPrisma] = useState(false);
  const [showCascada, setShowCascada] = useState(false);
  const [showLosPensamientos, setShowLosPensamientos] = useState(false);

  const handleCustomImgClick = (clickedTitle: string, close: boolean) => {
    if (clickedTitle === "Casa Los Vilos"){
      setShowLosVilos(true);
      setShowPrisma(false);
      setShowCascada(false);
      setShowLosPensamientos(false);
      if (close) {
        setShowFirstDiv(true);
        setShowSecondDiv(false);
      } else {
        setShowFirstDiv(false);
        setShowSecondDiv(true);
      }
    } else if (clickedTitle === "Casa Prisma"){
      setShowLosVilos(false);
      setShowPrisma(true);
      setShowCascada(false);
      setShowLosPensamientos(false);
      if (close) {
        setShowFirstDiv(true);
        setShowSecondDiv(false);
      } else {
        setShowFirstDiv(false);
        setShowSecondDiv(true);
      }
    } else if (clickedTitle === "Casa Cascada"){
      setShowLosVilos(false);
      setShowPrisma(false);
      setShowCascada(true);
      setShowLosPensamientos(false);
      if (close) {
        setShowFirstDiv(true);
        setShowSecondDiv(false);
      } else {
        setShowFirstDiv(false);
        setShowSecondDiv(true);
      }
    } else if (clickedTitle === "Casa Los Pensamientos"){
      setShowLosVilos(false);
      setShowPrisma(false);
      setShowCascada(false);
      setShowLosPensamientos(true);
      if (close) {
        setShowFirstDiv(true);
        setShowSecondDiv(false);
      } else {
        setShowFirstDiv(false);
        setShowSecondDiv(true);
      }
    }
  };
  

  return (
    <>
      {showFirstDiv && (
        <ScrollableCol lg={12} md={11} sm={11} xs={24}>
          <CustomImg src={`/img/svg/losvilos_6.jpeg`} width="600px" height="auto" onClick={() => handleCustomImgClick("Casa Los Vilos", false)} />
          <CustomImg src={`/img/svg/prisma_1.jpeg`} width="700px" height="auto" onClick={() => handleCustomImgClick("Casa Prisma", false)} />
          <CustomImg src={`/img/svg/cascada_12.png`} width="580vw" height="auto" onClick={() => handleCustomImgClick("Casa Cascada", false)} />
          <CustomImg src={`/img/svg/fondo_conguillio2.jpeg`} width="auto" height="auto" onClick={() => handleCustomImgClick("Casa Los Pensamientos", false)} />
        </ScrollableCol>
      )}
      {showLosVilos && (
        <AnimatedSecondDiv show={showSecondDiv}>
          <Row justify="space-between">
            <Col lg={12} md={11} sm={12} xs={24}>
              <CustomImg src={`/img/svg/losvilos_6.jpeg`} width="600px" height="auto" onClick={() => handleCustomImgClick("Casa Los Vilos", true)} />
            </Col>
            <Col lg={12} md={11} sm={12} xs={24} style={{ marginLeft: '1rem' }}>
              <h1>Casa Los Vilos</h1>
            </Col>
          </Row>
        </AnimatedSecondDiv>
        )}
      {showPrisma && (
        <AnimatedSecondDiv show={showSecondDiv}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <CustomImg src={`/img/svg/prisma_1.jpeg`} width="600px" height="auto" onClick={() => handleCustomImgClick("Casa Prisma", true)} />
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <h1></h1>
          </Col>
        </AnimatedSecondDiv>
      )}
      {showCascada && (
        <AnimatedSecondDiv show={showSecondDiv}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <CustomImg src={`/img/svg/cascada_12.png`} width="600px" height="auto" onClick={() => handleCustomImgClick("Casa Cascada", true)} />
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <h1></h1>
          </Col>
        </AnimatedSecondDiv>
      )}
      {showLosPensamientos && (
        <AnimatedSecondDiv show={showSecondDiv}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <CustomImg src={`/img/svg/fondo_conguillio2.jpeg`} width="600px" height="auto" onClick={() => handleCustomImgClick("Casa Los Pensamientos", true)} />
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <h1></h1>
          </Col>
        </AnimatedSecondDiv>
      )}
    </>
  );
};

export default withTranslation()(RightHalf);

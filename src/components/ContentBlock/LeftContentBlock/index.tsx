import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Image } from "../../../common/Image";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import { SvgIcon } from "../../../common/SvgIcon";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  H6
} from "./styles";


const LeftContentBlock = ({
  icons,
  title,
  content,
  section,
  t,
  id,
  image_width,
  image_height
}: ContentBlockProps) => {

  return (
    <LeftContentSection>
      {/* @ts-ignore */}
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <Carousel>
              {icons.map((icon, index) => (
                <div key={index}>
                  <SvgIcon src={icon} width={image_width ?? "100%"} height={image_height ?? "100%"} />
                </div>
              ))}
            </Carousel>
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <H6>{t(title)}</H6>
              <Content>{t(content)}</Content>
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          <MinTitle>{t(item.title)}</MinTitle>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);

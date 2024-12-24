import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
  H6,
  H7
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
      </a>
    );
  };

  const phoneNumber = '+56992517818';

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between" style={{marginTop: '0vh'}}>
            <Col lg={12} md={10} sm={12} xs={12}>
              <Empty />
            </Col>
            <Col lg={12} md={10} sm={12} xs={12}>
              <Empty />
              <Row>
                <a href="mailto:antoniomingomarinetti@gmail.com" style={{height: '4vh'}}>
                </a>
              </Row>
              <Row>
                <a href={`tel:${phoneNumber}`} style={{marginTop: '-1vh'}}>
                </a>
              </Row>
            </Col>
          </Row>
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);

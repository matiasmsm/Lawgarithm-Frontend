import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { OutroBlockSection, Content, ContentWrapper } from "./styles";


interface OutroBlockProps {
  title: string;
  content: string;
  button: string;
  button_section: string;
  t: any;
  id: string;
}

const OutroBlock = ({ title, content, button, t, id, button_section }: OutroBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <OutroBlockSection>
      {/* @ts-ignore */}
      <Slide direction="up">
        <Row justify="center" align="middle" id={id}>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {button && (
                <Button name="submit" onClick={() => scrollTo(button_section)}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </OutroBlockSection>
  );
};

export default withTranslation()(OutroBlock);

import styled from "styled-components";
import { Col } from "antd";

export const ScrollableCol = styled(Col)`
  background-color: #F7F052;
`;

export const Content = styled("p")`
  margin-top: 1.5rem;
`;

export const Container = styled("div")`
  position: relative;
  max-width: 700px;
`;

export const TextWrapper = styled("div")`
  border-radius: 3rem;
  max-width: 400px;
`;

export const CustomImg = styled("img")`
  margin-top: 10vh;
  cursor: url('/crosshair.cur'), crosshair;
`;

export const AnimatedSecondDiv = styled.div<{ show: boolean }>`
  margin-left: ${props => (props.show ? "-50vw" : "50vw")};
  transition: margin-left 3s;
  width: 100px;
  height: 100px;
  z-index: 9999;
`;
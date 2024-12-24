import { withTranslation } from "react-i18next";
import { FirstDiv, FixedCol, Title } from "./styles";
import { Row} from "antd";
import { SvgIcon } from "../../common/SvgIcon";
import Footer from "../Footer";

interface Props {
  t: any;
}

const LeftHalf = ({ t }: Props) => {
  return (
    <>
    <FixedCol lg={12} md={11} sm={11} xs={24}>
      <div style={{position: "fixed"}}>
        <Row>
          <Footer />
        </Row>
      </div>
    </FixedCol>
    </>
  );
};

export default withTranslation()(LeftHalf);

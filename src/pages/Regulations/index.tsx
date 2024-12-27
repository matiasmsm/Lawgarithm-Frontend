import { lazy } from "react";
import { Row, Col } from "antd";


const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const RightHalf = lazy(() => import("../../components/RightHalf"));
const LeftHalf = lazy(() => import("../../components/LeftHalf"));
const AllRegulations = lazy(() => import("../../components/AllRegulations"));

const Regulations = () => {
  return (
    <>
      <AllRegulations/>
    </>
  );
};

export default Regulations;

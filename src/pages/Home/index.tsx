import { lazy } from "react";
import { Row, Col } from "antd";


const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const RightHalf = lazy(() => import("../../components/RightHalf"));
const LeftHalf = lazy(() => import("../../components/LeftHalf"));
const PushableCols = lazy(() => import("../../components/PushableCols"));

const Home = () => {
  return (
    <>
      <PushableCols/>
    </>
  );
};

export default Home;

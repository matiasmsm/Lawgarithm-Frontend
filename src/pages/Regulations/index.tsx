import { lazy } from "react";
const AllRegulations = lazy(() => import("../../components/AllRegulations"));

const Regulations = () => {
  return (
    <>
      <AllRegulations/>
    </>
  );
};

export default Regulations;

import { lazy } from "react";
import { useParams } from "react-router-dom"; // If using React Router

const SingleRegulation = lazy(() => import("../../components/SingleRegulation"));

const Regulation = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <SingleRegulation id={id} />
    </>
  );
};

export default Regulation;

import { lazy } from "react";

const SignupForm = lazy(() => import("../../components/Signup"));

const Signup = () => {
  return (
    <>
      <SignupForm/>
    </>
  );
};

export default Signup;
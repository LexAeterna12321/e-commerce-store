import React from "react";
import "./SignInAndSingUp.scss";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/singUp/SignUp";
const SignInAndSingUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSingUp;

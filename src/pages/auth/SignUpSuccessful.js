import React from "react";
import { Link } from "react-router-dom";

const SignUpSuccessful = () => {
  return (
    <div className="flex flex-col items-center  ">
      <h1 className="text-2xl px-10 mt-44">
        Your account has successfully been created.
        <br />
        Go to{" "}
        <Link
          className="text-logoheadingConnect  hover:text-blue-400"
          to="/auth/login"
        >
          Login Page
        </Link>
      </h1>
    </div>
  );
};

export default SignUpSuccessful;

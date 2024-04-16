import React, { useContext } from "react";
import { authContext } from "../ContextProvider/AuthProvider";
import NotAuthorized from "../Shared/NotAuthorized";

const SignInAccess = ({ children }) => {
  const { user } = useContext(authContext);
  if (user) {
    return children;
  }
  return <NotAuthorized />;
};

export default SignInAccess;

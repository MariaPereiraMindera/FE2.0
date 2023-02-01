import React from "react";
import { UserContextProvider } from "./user/context";

interface GlobalContextProps {
  children: React.ReactNode;
}

const GlobalContext: React.FC<GlobalContextProps> = ({ children }) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};

export default GlobalContext;

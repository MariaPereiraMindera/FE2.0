import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";
import { GlobalStyle } from "./styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>
);

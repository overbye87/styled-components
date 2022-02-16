import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import styled, { createGlobalStyle } from "styled-components";
//import "normalize.css";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

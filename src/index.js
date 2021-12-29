import React from "react";
import ReactDOM from "react-dom";
import theme from "./muiTheme";
import { ThemeProvider } from "@mui/material/styles";
import "./assets/styles/index.scss";
import "react-multi-carousel/lib/styles.css";
import "./assets/styles/global.scss";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

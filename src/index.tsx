import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Test } from "./Test";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Test />
    </BrowserRouter>
  </React.StrictMode>
);

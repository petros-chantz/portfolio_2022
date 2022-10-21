import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom/client";
import { wrapHistory } from "oaf-react-router";
import "./index.scss";
import App from "./App";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

const history = createBrowserHistory();
wrapHistory(history);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </React.StrictMode>
);

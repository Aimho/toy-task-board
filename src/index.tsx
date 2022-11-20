import React from "react";
import ReactDOM from "react-dom/client";
import firebase from "firebase/compat/app";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import config from "./config";
import Provider from "components/Provider";

firebase.initializeApp(config.firebase);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

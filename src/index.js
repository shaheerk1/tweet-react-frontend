import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";

const domain = process.env.REACT_APP_AUTH_ZERO_DOMAIN;
const clientID = process.env.REACT_APP_AUTH_ZERO_CLIENT_ID;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

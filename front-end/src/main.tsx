import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

const DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
const CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID;
const redirectURI = window.location.origin + "/callback"


ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Auth0Provider domain={DOMAIN} clientId={CLIENT_ID} authorizationParams={{redirect_uri:redirectURI}} >
      {" "}
    <App />
    </Auth0Provider>
  </React.StrictMode>
);

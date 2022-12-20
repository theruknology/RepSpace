import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import { CardContextProvider } from "./src/context/CardContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CardContextProvider>
    <App />
  </CardContextProvider>
);

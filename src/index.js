import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// with the help of the childeren prop we can pass the value like in b/w the <button>kndofnsdn<span>rgsg</span></button>

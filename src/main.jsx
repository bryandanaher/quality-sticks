import React from "react";
import { ReactDOM, createRoot } from "react-dom/client";
import AppMain from "./App-Main/App-Main";
import "./index.scss";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AppMain />
  </React.StrictMode>
)

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

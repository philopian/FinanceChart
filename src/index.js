import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import App from "./App";

function Root() {
  return <App />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);

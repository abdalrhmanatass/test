import React from "react";
import ReactDOM, { render } from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import "./style.css";

//ReactDOM.render(what,where)
ReactDOM.render(
  //JSX
  <App />,
  document.getElementById("root")
);

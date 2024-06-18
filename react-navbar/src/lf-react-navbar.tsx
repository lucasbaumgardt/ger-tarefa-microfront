import "./main.css";

import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import NavBar from "./index";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: NavBar,
});

export const { bootstrap, mount, unmount } = lifecycles;

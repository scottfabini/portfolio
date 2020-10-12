/**
 * Base React
 */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Element() {
  return (
    <ul>
      List
      <li>Hot Dog</li>
      <li>Hamburger</li>
    </ul>
  );
}

// unused code
ReactDOM.render(
  React.createElement(
    "h1",
    { style: { color: "blue" } },
    React.createElement("li", null, "Hot Dogs"),
    React.createElement("li", null, "Hamburgers")
  ),
  document.getElementById("root") // injected at id="root" in index.js
);

export default Element;

/**
 * Base React
 */

// Properties (props) are properties for a Component.

import React from "react";
import "./index.css";

// This is a Component built on JSX
function Component(props) {
  console.log(props);
  return (
    <ul>
      List
      <li>Hot Dog</li>
      <li>Hamburger</li>
    </ul>
  );
}

export default Component;

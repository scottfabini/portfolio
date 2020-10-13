/**
 * Base React
 */

// Properties (props) are properties for a Component.

import React from "react";
import "./index.css";

// This is a Component built on JSX
function UnorderedList(props) {
  console.log(props);
  return (
    <ul>
      {props.list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default UnorderedList;

import React from "react";
import "./index.css";

// This is a Component built from a pure React element via React.createElement
function Element(props) {
  const element = React.createElement(
    "ul",
    { id: "recipe-0", key: "key1" },
    //["1", "2"].map((x) => <li>{x}</li>)
    ["1", "2"].map((x) => React.createElement("li", { key: x }, x))
  );
  console.log(element);
  return element;
}

export default Element;

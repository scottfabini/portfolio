import React from "react";
import "./index.css";

// How to declare a Component, from newest to oldest

// This is a Component built from JSX
function IngredientList({ items }) {
  const ingredientList = (
    <ul>
      {items.map((ingredient, i) => (
        <li key={i}>{ingredient}</li>
      ))}
    </ul>
  );
  console.log(ingredientList);
  return ingredientList;
}

export default IngredientList;

// This is a Component built from a pure React IngredientList via React.createIngredientList
function IngredientList2({ items }) {
  const ingredientList = React.createElement(
    "ul",
    { className: "ingredients" },
    items.map((ingredient, i) => <li key={i}>{ingredient}</li>)
  );
  console.log(ingredientList);
  return ingredientList;
}

// Class-based syntax from ES2015.
// This is on the road to depracation as well.
class IngredientList4 extends React.Component {
  render() {
    return React.createElement(
      "ul",
      { className: "ingredients" },
      this.props.items.map((ingredient, i) => <li key={i}>{ingredient}</li>)
    );
  }
}

// Original React Class-based Component
// React.createClass officially deprecated in React 16
// const IngredientList3 = React.createClass({
//   displayName: "IngredientsList",
//   render() {
//     return React.createElement(
//       "ul",
//       { className: "ingredients" },
//       this.props.items.map((ingredient, i) => <li key={i}>{ingredient}</li>)
//     );
//   },
// });

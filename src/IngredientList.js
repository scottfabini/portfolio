import React from "react";
import "./index.css";

// This is a Component built from a pure React IngredientList via React.createIngredientList
function IngredientList({ items }) {
  const ingredientList = React.createElement(
    "ul",
    { className: "ingredients" },
    items.map((ingredient, i) => <li key={i}>{ingredient}</li>)
  );
  console.log(ingredientList);
  return ingredientList;
}

export default IngredientList;

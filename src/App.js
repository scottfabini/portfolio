import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Component from "./Component";
import UnorderedList from "./UnorderedList";
import Element from "./Element";
import IngredientList from "./IngredientList";
import Stars from "./StarRating";

function App() {
  const list = ["Hamburgers", "Hot Dogs"];
  const items = ["Onions", "Tomatoes"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Component library="React" />
          <UnorderedList list={list}></UnorderedList>
          <Element />
          <IngredientList items={items}></IngredientList>
          <Stars stars={2} />
          {/* Actually  this is a Component */}
        </a>
      </header>
    </div>
  );
}

export default App;

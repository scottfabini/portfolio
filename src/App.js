import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Component from "./Component";
import UnorderedList from "./UnorderedList";
import Element from "./Element";
import IngredientList from "./IngredientList";
import StarRating from "./StarRating";
import initialColorData from "./color-data.json";
import ColorList from "./ColorList.js";
import { useState } from "react";

function App() {
  const list = ["Hamburgers", "Hot Dogs"];
  const items = ["Onions", "Tomatoes"];
  const initialRating = 2;
  const [colors, setColors] = useState(initialColorData);
  const [rating, setRating] = useState(initialRating)

  return (
    <div className="App">
      <ColorList 
      colors={colors} 
      onRateColor={(id, rating) => {
        // const newRate = rate.filter(rating => rating.id !== id)
        const newColors = colors.map( color => 
          color.id === id ? { ...color, rating} : color
        );
        console.log(newColors);
        setColors(newColors);
      }}
      onRemoveColor={id => {
        const newColors = colors.filter(color => color.id !== id);
        console.log(newColors);
        setColors(newColors);
      }}

      
      
      />
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
        </a>
        <Component library="React" />
        <UnorderedList list={list}></UnorderedList>
        <Element />
        <IngredientList items={items}></IngredientList>
        <StarRating selectedStars={rating} onRate={(newRating) => {
          setRating(newRating);
      }}/>
      </header>
    </div>
  );
}

export default App;

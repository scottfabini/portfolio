import React, { useState, createContext, useContext } from 'react';
import colorData from './color-data.json';
import { v4 } from 'uuid';
import { PropTypes } from 'prop-types';

// useInput returns [ {value, onChange()}, resetValue() ]
// So the value, a function to change the value, and a function to reset back to the initial value
export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [{ value, onChange: (e) => setValue(e.target.value) }, () => setValue(initialValue)];
};

const ColorContext = createContext();

export default function ColorProvider({ children }) {
  ColorProvider.propTypes = {
    children: PropTypes.element.isRequired,
  };

  const [colors, setColors] = useState(colorData);

  const addColor = (title, color) => {
    setColors([
      ...colors,
      {
        id: v4(),
        rating: 2,
        title,
        color,
      },
    ]);
  };

  const rateColor = (id, rating) => {
    const newColors = colors.map((color) => (color.id === id ? { ...color, rating } : color));
    setColors(newColors);
  };

  const removeColor = (id) => {
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
  };

  return (
    <ColorContext.Provider
      value={{
        colors,
        addColor,
        removeColor,
        rateColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
}

export const useColors = () => useContext(ColorContext);

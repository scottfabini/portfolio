import React from 'react';
import Color from './Color';
import { useColors } from './hooks';

export default function ColorList() {
  const { colors, removeColor, rateColor } = useColors();

  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;

  // const onRateColor = (id, rating) => {
  //   // const newRate = rate.filter(rating => rating.id !== id)
  //   const newColors = colors.map((color) => (color.id === id ? { ...color, rating } : color));
  //   //setColors(newColors);
  // };
  // const onRemoveColor = (id) => {
  //   const newColors = colors.filter((color) => color.id !== id);
  //   // setColors(newColors);
  // };

  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color
          key={color.id}
          id={color.id}
          title={color.title}
          color={color.color}
          rating={color.rating}
          // onRateColor={onRateColor}
          // WRONG - Must name onRate, as that's how <Color /> defines it.
          onRemove={removeColor}
          onRate={rateColor}
        />
      ))}
    </div>
  );
}

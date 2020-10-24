import React from 'react';
import Color from './Color';

export default function ColorList({
  colors = [],
  onRemoveColor = (f) => f,
  onRateColor = (f) => f,
}) {
  if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;

  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          id={color.id}
          title={color.title}
          color={color.color}
          rating={color.rating}
          // onRateColor={onRateColor}
          // WRONG - Must name onRate, as that's how <Color /> defines it.
          onRate={onRateColor}
          onRemove={onRemoveColor}
        />
      ))}
    </div>
  );
}

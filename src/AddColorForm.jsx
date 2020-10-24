import React from 'react';
import { useInput } from './hooks';

export default function AddColorForm({ onNewColor = (f) => f }) {
  const [title, resetTitle] = useInput('');
  const [color, resetColor] = useInput('#000000');

  const submit = (e) => {
    e.preventDefault();
    onNewColor(title.value, color.value);
    resetTitle();
    resetColor();
  };
  return (
    <>
      <form onSubmit={submit}>
        <input
          onChange={title.onChange}
          value={title.value}
          type="text"
          placeholder="color title..."
          required
        />
        <input onChange={color.onChange} value={color.value} type="color" required />
        <button type="submit">ADD</button>
      </form>
    </>
  );
}

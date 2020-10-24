import React from 'react';
import { useInput } from './hooks';

export default function AddColorForm({ onNewColor = (f) => f }) {
  const [title, resetTitle] = useInput('');
  const [color, resetColor] = useInput('#000000');

  // This is everything we do when the Submit button is pushed.
  const submit = (e) => {
    e.preventDefault();
    // here is wehere we see that onNewColor() takes two arguments: a title and a color
    // the onNewColor function passed down from App.jsx creates the corresponding title and color in the state.
    onNewColor(title.value, color.value);
    resetTitle();
    resetColor();
  };
  return (
    <>
      <form onSubmit={submit}>
        <input
          onChange={title.onChange} // We apply the onChange from the useInput hook on every key press to update title.
          value={title.value}
          type="text"
          placeholder="color title..."
          required
        />
        {/* We apply the onChange from the useInput hook on every color entry change to update color. */}
        <input onChange={color.onChange} value={color.value} type="color" required />
        <button type="submit">ADD</button>
      </form>
    </>
  );
}

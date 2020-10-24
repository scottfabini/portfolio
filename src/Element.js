import React from 'react';
import './index.css';

// This is a Component built from a pure React element via React.createElement
function Element({ id, key }) {
  const element = React.createElement(
    'ul',
    { id: { id }, key: { key } },
    // ["1", "2"].map((x) => <li>{x}</li>)
    ['1', '2'].map((x) => React.createElement('li', { key: x }, x)),
  );
  return element;
}

export default Element;

import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import ColorProvider from './hooks';
import colorData from './color-data';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   React.createElement(
//     "h1",
//     { style: { color: "blue" } },
//     React.createElement("li", null, "Hot Dogs"),
//     React.createElement("li", null, "Hamburgers")
//   ),
//   document.getElementById("root") // injected at id="root" in index.js
// );

ReactDOM.render(
  [
    <React.StrictMode>
      <ColorProvider>
        <App />
      </ColorProvider>
    </React.StrictMode>,
  ],
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

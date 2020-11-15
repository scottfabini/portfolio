import React from 'react';
import ReactDOM from 'react-dom';
import Spectrum from './Components/Spectrum';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import { Image, Flex, View, Item, Header, ActionButton, Breadcrumbs } from '@adobe/react-spectrum';
import Navbar from './Components/Navbar';
import OldWebsite from './Components/OldWebsite';
import ComplexRouter from './Components/ComplexRouter';

ReactDOM.render(
  [
    <React.StrictMode>
      <Provider theme={defaultTheme}>
        {/* <ComplexRouter /> */}
        <Navbar />
        {/* <OldWebsite /> */}
        {/* <Navbar /> */}
        {/* <Router /> */}
      </Provider>
    </React.StrictMode>,
  ],
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

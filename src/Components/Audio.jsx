import React from 'react';
import './index-bak.css';
import '../assets/dist/css/bootstrap.min.css';

import App from '../App.jsx';
import ColorProvider from '../hooks.jsx';
import AudioProvider from '../AudioProvider';
import Oscillator from '../Oscillator';

export default function Audio() {
  return (
    <>
      <AudioProvider>
        <ColorProvider>{/* <App /> */}</ColorProvider>
        <Oscillator />
      </AudioProvider>
    </>
  );
}

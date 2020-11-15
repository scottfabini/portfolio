import React from 'react';
import './index-bak.css';
import '../assets/dist/css/bootstrap.min.css';

import App from '../App.jsx';
import ColorProvider from '../hooks.jsx';
import AudioProvider from '../AudioProvider';

export default function Audio() {
  return (
    <>
      <ColorProvider>
        <AudioProvider>
          <App />
        </AudioProvider>
      </ColorProvider>
    </>
  );
}

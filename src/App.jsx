import React from 'react';
import './App.css';
import Oscillator from './Oscillator';
import Output from './Output';
import ColorList from './ColorList';

function App() {
  return (
    <div className="App">
      <ColorList></ColorList>
      <Oscillator />
      <Output />
    </div>
  );
}

export default App;

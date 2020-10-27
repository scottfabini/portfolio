import React, { useState } from 'react';
import { useAudio } from './AudioProvider';

export default function Output() {
  const { audio, addNode, chainNodes, reportNodes } = useAudio();

  const output = audio.destination;

  const addOutput = () => {
    addNode(output);
  };

  return (
    <div className="color-list">
      <h1>Output</h1>
      <button type="submit" onClick={addOutput}>
        Create
      </button>
      <button type="submit" onClick={chainNodes}>
        Chain!
      </button>
      <button type="submit" onClick={reportNodes}>
        Report!
      </button>
    </div>
  );
}

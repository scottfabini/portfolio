import React, { useState } from 'react';
import { useAudio } from './AudioProvider';

export default function Oscillator() {
  // const { audio } = useAudio();
  const { audio, addNode, chainNodes } = useAudio();

  const osc = audio.createOscillator();

  const play = () => {
    osc.start(audio.currentTime);
    osc.stop(audio.currentTime + 2);
    addNode(osc);
    addNode(audio.destination);
  };

  const stop = () => {
    osc.stop();
  };

  const addOsc = () => {
    addNode(osc);
  };

  // const pitchUp = () => {
  //   osc.frequency.setValueAtTime(osc.frequency.value + 10, audio.currentTime);
  // };

  // const pitchDown = () => {
  //   osc.frequency.setValueAtTime(osc.frequency.value - 10, audio.currentTime);
  // };

  return (
    <div className="color-list">
      <h1>Oscillator</h1>
      <button type="submit" onClick={play}>
        Play
      </button>
      <button type="submit" onClick={stop}>
        Stop
      </button>
      {/* <button type="submit" onClick={pitchUp}>
        F +
      </button>
      <button type="submit" onClick={pitchDown}>
        F -
      </button> */}
      <button type="submit" onClick={addOsc}>
        Add!
      </button>
      <button type="submit" onClick={chainNodes}>
        Connect!
      </button>
    </div>
  );
}

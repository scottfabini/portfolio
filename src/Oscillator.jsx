import React from 'react';
import { useAudio } from './AudioProvider';

export default function Oscillator() {
  const audio = useAudio();
  const osc = audio.createOscillator();
  osc.connect(audio.destination);

  const play = () => {
    osc.start();
  };

  const stop = () => {
    osc.stop();
  };

  return (
    <div className="color-list">
      <h1>Hello</h1>
      <button type="submit" onClick={play}>
        Play
      </button>
      <button type="submit" onClick={stop}>
        Stop
      </button>
    </div>
  );
}

import React from 'react';
import { useAudio } from './AudioProvider';
import { useState } from 'react';

export default function Gain() {
  const { audio, addOscillator, addGain, connect } = useAudio();
  const [destination, setDestination] = useState();
  const [source, setSource] = useState();

  const gain = audio.createGain();

  const pitchUp = () => {
    gain.gain.value += 0.1;
  };

  const pitchDown = () => {
    gain.gain.value -= 0.1;
  };

  console.log(audio);
  return (
    <div className="color-list">
      <h1>Gain</h1>
      <button type="submit" onClick={pitchUp}>
        G +
      </button>
      <button type="submit" onClick={pitchDown}>
        G -
      </button>
      <button type="submit" onClick={addGain}>
        Add Gain
      </button>
      <button type="submit" onClick={connect}>
        Connect!
      </button>
    </div>
  );
}

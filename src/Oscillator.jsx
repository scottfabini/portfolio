import React, { useState } from 'react';
import { useAudio } from './AudioProvider';
import * as Tone from 'tone';

export default function Oscillator() {
  const { audio, addNode, chainNodes } = useAudio();

  const osc = audio.createOscillator();

  const one = () => {
    const synth = new Tone.Synth().toDestination();
    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease('C4', '8n');
  };

  const two = () => {
    const synth = new Tone.Synth().toDestination();
    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease('D4', '8n');
  };

  const three = () => {
    const synth = new Tone.Synth().toDestination();
    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease('E4', '8n');

    // osc.frequency.setValueAtTime(osc.frequency.value + 10, audio.currentTime);
    // addNode(osc);
  };

  const four = () => {
    const synth = new Tone.Synth().toDestination();
    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease('F4', '8n');
  };

  const five = () => {
    const synth = new Tone.Synth().toDestination();
    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease('G4', '8n');
    // osc.frequency.setValueAtTime(osc.frequency.value - 10, audio.currentTime);
  };

  const six = () => {
    const synth = new Tone.Synth().toDestination();
    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease('A4', '8n');
    // osc.frequency.setValueAtTime(osc.frequency.value - 10, audio.currentTime);
  };

  return (
    <div className="color-list">
      <h1>Oscillator</h1>
      <button type="submit" onClick={one}>
        1
      </button>
      <button type="submit" onClick={two}>
        2
      </button>
      <button type="submit" onClick={three}>
        3
      </button>
      <button type="submit" onClick={four}>
        4
      </button>
      <button type="submit" onClick={five}>
        5
      </button>
      <button type="submit" onClick={six}>
        6
      </button>
    </div>
  );
}

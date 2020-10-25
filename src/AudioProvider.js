import React, { useState, createContext, useContext } from 'react';
import { PropTypes } from 'prop-types';

// useInput returns [ {value, onChange()}, resetValue() ]
// So the value, a function to change the value, and a function to reset back to the initial value
export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [{ value, onChange: (e) => setValue(e.target.value) }, () => setValue(initialValue)];
};

const audio = new AudioContext();
const AudioCtx = createContext(audio);
export default function AudioProvider({ children }) {
  AudioProvider.propTypes = {
    children: PropTypes.element.isRequired,
  };
  return <AudioCtx.Provider value={audio}>{children}</AudioCtx.Provider>;
}
// export const useAudio = () => useContext(AudioCtx);
export const useAudio = () => useContext(AudioCtx);

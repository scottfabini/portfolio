import React, { useState, createContext, useContext } from 'react';
import { v4 } from 'uuid';
import { PropTypes } from 'prop-types';
import AudioData from './audio-data.json';

const AudioContext = createContext();

export function AudioProvider({ children }) {
  AudioProvider.propTypes = {
    children: PropTypes.element.isRequired,
  };

  const [audio, setAudio] = useState(AudioData);

  return (
    <AudioContext.Provider
      value={{
        audio,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

const useAudio = () => useContext(AudioContext);

export default useAudio;

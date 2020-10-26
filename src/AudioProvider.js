import React, { useState, createContext, useContext } from 'react';
import { PropTypes } from 'prop-types';
import { v4 } from 'uuid';

const audio = new AudioContext();
const AudioCtx = createContext(audio);

export default function AudioProvider({ children }) {
  AudioProvider.propTypes = {
    children: PropTypes.element.isRequired,
  };

  const [nodes, setNodes] = useState({});

  const addNode = (node) => {
    setNodes(
      {
        ...nodes,
        [v4()]: node,
      },
      console.log(nodes),
    );
  };

  const chainNodes = () => {
    const src1 = nodes[Object.keys(nodes)[0]];
    const src2 = nodes[Object.keys(nodes)[1]];
    src1.connect(src2);
    src1.start(audio.currentTime);
    src1.stop(audio.currentTime + 2);
  };

  const reportNodes = () => {
    console.log('nodes');
    console.log({ ...nodes });
  };

  return (
    <AudioCtx.Provider value={{ audio, addNode, chainNodes, reportNodes }}>
      {children}
    </AudioCtx.Provider>
  );
}
export const useAudio = () => useContext(AudioCtx);

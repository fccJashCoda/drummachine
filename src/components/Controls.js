import { useState } from 'react';
import Display from './Display';

const Controls = ({ display, volume, power, adjustVolume, managePower }) => {
  return (
    <>
      <label>
        Volume
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => adjustVolume(e.target.value)}
        />
      </label>
      <label>
        On/Off
        <input type="checkbox" checked={power} onChange={managePower} />
      </label>
      {power && <p>On</p>}
      <Display display={display} />
    </>
  );
};

export default Controls;

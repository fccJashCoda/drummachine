import Controls from './Controls';
import Soundboard from './Soundboard';
import { useState } from 'react';

const DrumMachine = () => {
  const [display, setDisplay] = useState('');
  const [volume, setVolume] = useState(0.2);
  const [power, setPower] = useState(true);

  const handleDisplay = (payload) => {
    setDisplay(payload);
  };

  const adjustVolume = (level) => {
    setVolume(level);
  };

  const managePower = () => {
    setPower(!power);
  };

  return (
    <div id="drum-machine">
      <Soundboard power={power} volume={volume} handleDisplay={handleDisplay} />
      <Controls
        display={display}
        volume={volume}
        adjustVolume={adjustVolume}
        power={power}
        managePower={managePower}
      />
    </div>
  );
};

export default DrumMachine;

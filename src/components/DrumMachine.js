import Audiotag from './Audiotag';
import Controls from './Controls';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';

const audioBank = [
  {
    id: uuid(),
    key: 'Q',
    name: 'Chord 1',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3 ',
  },
  {
    id: uuid(),
    key: 'W',
    name: 'Chord 2',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
  },
  {
    id: uuid(),
    key: 'E',
    name: 'Chord 3',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
  },
  {
    id: uuid(),
    key: 'A',
    name: 'kick n hat',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3 ',
  },
  {
    id: uuid(),
    key: 'S',
    name: 'kick 1',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3 ',
  },
  {
    id: uuid(),
    key: 'D',
    name: 'Clap',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    id: uuid(),
    key: 'Z',
    name: 'Punchy kick',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3 ',
  },
  {
    id: uuid(),
    key: 'X',
    name: 'Side stick',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3 ',
  },
  {
    id: uuid(),
    key: 'C',
    name: 'Snare',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3 ',
  },
];

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
      <div id="soundboard">
        {audioBank.map((element) => (
          <Audiotag
            key={element.id}
            sound={element}
            action={handleDisplay}
            volume={power ? volume : 0}
          />
        ))}
      </div>

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

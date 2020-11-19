import DrumPad from './DrumPad';
import { v4 as uuid } from 'uuid';

const audioBank = [
  {
    id: uuid(),
    key: 'Q',
    name: 'header-1',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },
  {
    id: uuid(),
    key: 'W',
    name: 'header-2',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3 ',
  },
  {
    id: uuid(),
    key: 'E',
    name: 'header-3',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },
  {
    id: uuid(),
    key: 'A',
    name: 'header-4_1',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  {
    id: uuid(),
    key: 'S',
    name: 'header-6',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    id: uuid(),
    key: 'D',
    name: 'dsc-oh',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3 ',
  },
  {
    id: uuid(),
    key: 'Z',
    name: 'kick-n-hat',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3 ',
  },
  {
    id: uuid(),
    key: 'X',
    name: 'kick-1',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3 ',
  },
  {
    id: uuid(),
    key: 'C',
    name: 'cev-h2',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
  // {
  //   id: uuid(),
  //   key: '',
  //   name: 'chord-1',
  //   audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3 ',
  // },
  // {
  //   id: uuid(),
  //   key: '',
  //   name: 'chord-2',
  //   audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
  // },
  // {
  //   id: uuid(),
  //   key: '',
  //   name: 'chord-3',
  //   audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
  // },
  // {
  //   id: uuid(),
  //   key: '',
  //   name: 'give-us-a-light',
  //   audioUrl:
  //     'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3 ',
  // },
  // {
  //   id: uuid(),
  //   key: '',
  //   name: 'dry-ohh',
  //   audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
  // },
  // {
  //   id: uuid(),
  //   key: '',
  //   name: 'bld-h1',
  //   audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
  // },
  // {
  //   id: uuid(),
  //   key: '',
  //   name: 'punchy-kick-1',
  //   audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3 ',
  // },
  // {
  //   id: uuid(),
  //   key: '',
  //   name: 'side-stick-1',
  //   audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3 ',
  // },
  // {
  //   id: uuid(),
  //   key: '',
  //   name: 'brk-snr',
  //   audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3 ',
  // },
];

const DrumMachine = () => {
  return (
    <div id="display">
      <h1>DrumMachine</h1>
      {audioBank.map((element) => (
        <DrumPad key={element.id} sound={element} />
      ))}
    </div>
  );
};

export default DrumMachine;

import Audiotag from './Audiotag';

const audioBank = [
  {
    id: 0,
    key: 'Q',
    name: 'Chord 1',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3 ',
  },
  {
    id: 1,
    key: 'W',
    name: 'Chord 2',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
  },
  {
    id: 2,
    key: 'E',
    name: 'Chord 3',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
  },
  {
    id: 3,
    key: 'A',
    name: 'kick n hat',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3 ',
  },
  {
    id: 4,
    key: 'S',
    name: 'kick 1',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3 ',
  },
  {
    id: 5,
    key: 'D',
    name: 'Clap',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  },
  {
    id: 6,
    key: 'Z',
    name: 'Punchy kick',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3 ',
  },
  {
    id: 7,
    key: 'X',
    name: 'Side stick',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3 ',
  },
  {
    id: 8,
    key: 'C',
    name: 'Snare',
    audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3 ',
  },
];

const Soundboard = ({ power, volume, handleDisplay }) => {
  return (
    <>
      {power ? (
        <div id="soundboard" className={power ? 'powered' : ''}>
          {audioBank.map((element) => (
            <Audiotag
              key={element.id}
              sound={element}
              action={handleDisplay}
              volume={power ? volume : 0}
            />
          ))}
        </div>
      ) : (
        <div id="soundboard"></div>
      )}
    </>
  );
};
export default Soundboard;

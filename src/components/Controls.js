import Display from './Display';

const Controls = ({ display, volume, power, adjustVolume, managePower }) => {
  return (
    <div id="controls">
      <label htmlFor="volume" id="volumeSlider">
        Volume
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => adjustVolume(e.target.value)}
          id="volume"
        />
      </label>
      <label htmlFor="power" id="powerSwitch">
        On/Off
        <input
          type="checkbox"
          checked={power}
          onChange={managePower}
          id="power"
        />
      </label>
      <div id="powerLed" className={power ? 'powerOn' : 'powerOff'}></div>
      <Display display={power ? display : ''} />
    </div>
  );
};

export default Controls;

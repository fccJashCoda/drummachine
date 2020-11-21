import Display from './Display';

const Controls = ({ display, volume, power, adjustVolume, managePower }) => {
  return (
    <div id="controls">
      <Display display={power ? display : ''} power={power} />
      <div id="control-unit">
        <label htmlFor="volume" id="volumeControl">
          Vol.
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => adjustVolume(e.target.value)}
            id="volume"
            // className="volumeSlider"
            className={`volumeSlider ${power ? 'powered' : ''}`}
          />
        </label>
        <label htmlFor="power" id="powerSwitch">
          Power
          <div className="switch">
            <input
              type="checkbox"
              checked={power}
              onChange={managePower}
              id="power"
            />
            <span class="powerSlider"></span>
          </div>
        </label>
        <div id="powerLed" className={power ? 'powerOn' : 'powerOff'}></div>
      </div>
    </div>
  );
};

export default Controls;

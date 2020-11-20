import { useState } from 'react';

const Controls = () => {
  const [volume, setVolume] = useState(20);
  const [on, setOn] = useState(true);

  return (
    <>
      <input
        type="range"
        min={0}
        max={100}
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
      />
      <input
        type="checkbox"
        checked={on}
        onChange={() => {
          setOn(!on);
        }}
      />
      <p>{volume}</p> {on && <p>On</p>}
    </>
  );
};

export default Controls;

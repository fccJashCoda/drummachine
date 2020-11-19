import { useEffect, useState } from 'react';

const DrumPad = ({ sound }) => {
  const [classes, setClasses] = useState('drum-pad');
  const audio = new Audio(sound.audioUrl);

  const playSound = () => {
    audio.currentTime = 0;
    audio.volume = 0.1;
    audio.play();
  };

  const keypressed = (e) => {
    if (e.key === sound.key.toLowerCase()) {
      setClasses('drum-pad active');
      console.log('nani');
      console.log(e);
      playSound();
    }
    setTimeout(() => setClasses('drum-pad'), 100);
  };

  useEffect(() => {
    window.addEventListener('keydown', keypressed);

    return () => window.removeEventListener('keydown', keypressed);
  }, []);

  return (
    <div onClick={() => playSound()} className={classes} id={sound.name}>
      <p>{sound.key}</p>
    </div>
  );
};

export default DrumPad;

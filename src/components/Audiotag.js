import { useEffect, useState } from 'react';

const DrumPad = ({ sound, action }) => {
  const [classes, setClasses] = useState('drum-pad');

  const playSound = () => {
    action(sound.name);
    const audio = document.getElementById(sound.key);
    audio.currentTime = 0;
    audio.volume = 0.1;
    audio.play();
  };

  const keypressed = (e) => {
    if (e.key.toUpperCase() === sound.key) {
      setClasses('drum-pad active');
      playSound();
    }
    setTimeout(() => setClasses('drum-pad'), 100);
  };

  useEffect(() => {
    document.addEventListener('keydown', keypressed);

    return () => document.removeEventListener('keydown', keypressed);
  }, []);

  return (
    <div className={classes} id={sound.name} onClick={playSound}>
      <p>{sound.key}</p>
      <audio
        src={sound.audioUrl}
        type="audio/mp3"
        className="clip"
        id={sound.key}
        preload="auto"
      ></audio>
    </div>
  );
};

export default DrumPad;

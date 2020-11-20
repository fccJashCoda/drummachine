import { useEffect, useState } from 'react';

const DrumPad = ({ sound, action, volume }) => {
  const [classes, setClasses] = useState('drum-pad');

  const playSound = () => {
    console.log('trigger', volume);
    action(sound.name);
    const audio = document.getElementById(sound.key);
    audio.volume = volume;
    audio.currentTime = 0;
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
  }, [volume]);

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

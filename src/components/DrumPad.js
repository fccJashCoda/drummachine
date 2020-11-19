import { useEffect } from 'react';

const DrumPad = ({ sound }) => {
  const audio = new Audio(sound.audioUrl);

  const playSound = () => {
    audio.currentTime = 0;
    audio.volume = 0.1;
    audio.play();
  };

  const keypressed = (e) => {
    if (e.key === sound.key.toLowerCase()) {
      playSound();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keypressed);

    return () => window.removeEventListener('keydown', keypressed);
  }, []);

  return (
    <div onClick={() => playSound()} className="drum-pad" id={sound.name}>
      <p>{sound.key}</p>
    </div>
  );
};

export default DrumPad;

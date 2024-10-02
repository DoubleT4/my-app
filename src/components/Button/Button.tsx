import React, { useRef } from 'react';

const Button = ({ sound }) => {
  const audioRef = useRef(null); // Référence à l'élément audio

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.src = sound; // Mettre à jour la source
      audioRef.current.play(); // Jouer l'audio
    }
  };

  return (
    <div>
      <audio ref={audioRef} style={{ display: 'none' }}>
        <source src={sound} type="audio/mpeg" />
        Votre navigateur ne prend pas en charge l'élément audio.
      </audio>
      <button onClick={playAudio}>Jouer</button>
    </div>
  );
};

export default Button;

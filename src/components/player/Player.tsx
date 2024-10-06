"use client";
import React, { useState, useEffect, useRef } from 'react';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export function Player({ src }) {
  const audioPlayer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong] = useState(src);

  // Déplacement de handleEnded à l'extérieur de useEffect
  const handleEnded = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    if (audioPlayer.current) {
      audioPlayer.current.addEventListener('ended', handleEnded);
    }
    return () => {
      if (audioPlayer.current) {
        audioPlayer.current.removeEventListener('ended', handleEnded);
      }
    };
  }, [currentSong]); // L'effet se déclenche quand currentSong change

  const togglePlay = () => {
    if (!isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
    setIsPlaying(prev => !prev);
  };

  return (
    <>
      <audio src={currentSong} ref={audioPlayer} type="audio/mp3" />
      {!isPlaying
        ? <PlayArrowIcon fontSize={'large'} sx={{ height: '50px', width: '50px', color: 'blue', '&:hover': { color: 'white' } }} onClick={togglePlay} />
        : <PauseIcon fontSize={'large'} sx={{ height: '50px', width: '50px', color: 'blue', '&:hover': { color: 'white' } }} onClick={togglePlay} />
      }
    </>
  );
}

export default Player;



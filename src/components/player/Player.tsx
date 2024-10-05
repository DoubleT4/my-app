"use client"
import React, { useState, useEffect, useRef } from 'react'
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';




export function Player({ src }) {
  const audioPlayer = useRef()
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong] = useState(src);


  useEffect(() => {
    if (audioPlayer.current) 
      {const handleEnded = () => {
        setIsPlaying(false);
      };
      audioPlayer.current.addEventListener('ended', handleEnded);
      return () => {
        audioPlayer.current.removeEventListener('ended', handleEnded);
      };
    }
  }, [currentSong]);


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

  )
}

export default Player


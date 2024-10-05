"use client"
import React, {useState, useEffect, useRef} from 'react'
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';




export function Player({src}) {
  const audioPlayer = useRef()
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(30);
  const [duration, setDuration] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [currentSong] = useState(src);

    useEffect(() => {
    if(audioPlayer){
        audioPlayer.current.volume = volume / 100;
    }

    
    if(isPlaying){
        setInterval(() => {
            const _duration = Math.floor(audioPlayer?.current?.duration);
            const _elapsed = Math.floor(audioPlayer?.current?.currentTime);

            setDuration(_duration);
            setElapsed(_elapsed);
        }, 100);
    }

}, [
    volume, isPlaying
]);


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
        <audio src={currentSong} ref={audioPlayer} type="audio/mp3"/> 
          {!isPlaying
            ?   <PlayArrowIcon fontSize={'large'} sx={{color: 'blue', '&:hover': {color: 'white'}}} onClick={togglePlay}/>
            :   <PauseIcon fontSize={'large'} sx={{color: 'blue', '&:hover': {color: 'white'}}} onClick={togglePlay}/>
          }
      </>  
    
  )
}

export default Player


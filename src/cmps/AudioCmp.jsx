import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { updateItem } from '../store/item.action';
import { stopSound } from '../store/item.action.js';
import muteSvg from '../assets/imgs/svg/mute.svg';
import soundSvg from '../assets/imgs/svg/sound.svg';
import { clear } from '@testing-library/user-event/dist/clear';

const AudioCmp = ({ audio, color, _id, name, isMute }) => {
  const dispatch = useDispatch();
  const { play } = useSelector((state) => ({
    play: state.itemModule.play,
  }));
  const { loop } = useSelector((state) => ({
    loop: state.itemModule.loop,
  }));

  const [recording, setRecording] = useState(new Audio());
  const [time, setTime] = useState(0);
  const intervalId = useRef();

  useEffect(() => {
    recording.src = require(`../assets/audios/${name}.mp3`);
  }, []);

  useEffect(() => {
    if (play) {
      intervalId.current = setInterval(() => {
        setTime((recording.currentTime / 17) * 10000);
      }, 1);

      recording.play();
    } else {
      clearInterval(intervalId.current);
      recording.pause();
      setTime(0);
      recording.currentTime = 0;
    }

    recording.onended = () => {
      if (loop) {
        clearInterval(intervalId.current);
        recording.currentTime = 0;
        intervalId.current = setInterval(() => {
          setTime((recording.currentTime / 17) * 10000);
        }, 100);
        recording.play();
      } else {
        clearInterval(intervalId.current);
        recording.currentTime = 0;
        dispatch(stopSound());
      }
    };
  }, [loop, play]);

  useEffect(() => {
    if (isMute) {
      recording.volume = 0;
    } else {
      recording.volume = 1;
    }
  }, [isMute]);

  const toggleMute = () => {
    const newAudio = { ...audio, isMute: !audio.isMute };
    dispatch(updateItem(newAudio));
  };
  const handleRange = () => {};

  const showProgress = () => {
    console.log(play);
    if (play) {
      setTimeout(() => {
        showProgress();
      }, 10);
    }
    return (recording.currentTime / 17) * 100;
  };

  return (
    <div style={{ backgroundColor: color }} className='audio'>
      <span className='audio-name'>{name}</span>

      <input
        min={0}
        max={10000}
        onChange={handleRange}
        type='range'
        value={time}
      />

      {/* <Box sx={{ width: '100%' }}>
        <LinearProgress variant='determinate' value={showProgress()} />
      </Box> */}

      {isMute && (
        <img className='mute-btn' onClick={toggleMute} src={muteSvg} alt='' />
      )}
      {!isMute && (
        <img className='mute-btn' onClick={toggleMute} src={soundSvg} alt='' />
      )}
    </div>
  );
};

export default AudioCmp;

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateAudio, togglePlay } from '../store/audio.action';

import muteSvg from '../assets/imgs/svg/mute.svg';
import soundSvg from '../assets/imgs/svg/sound.svg';

const AudioPreview = ({ timeToChange, changeTime, audio }) => {
  const dispatch = useDispatch();

  const { play } = useSelector((state) => ({
    play: state.audioModule.play,
  }));
  const { pause } = useSelector((state) => ({
    pause: state.audioModule.pause,
  }));

  const { isLoop } = useSelector((state) => ({
    isLoop: state.audioModule.isLoop,
  }));

  const [recording, setRecording] = useState(new Audio());
  const intervalId = useRef();

  useEffect(() => {
    recording.src = require(`../assets/audios/${audio.name}.mp3`);
    return () => {
      console.log('unmounting');
      recording.pause();
      changeTime(0);
      recording.currentTime = 0;
      dispatch(togglePlay(false));
    };
  }, []);

  useEffect(() => {
    recording.ontimeupdate = () => {
      changeTime((recording.currentTime / 17) * 17000);
    };

    if (play) {
      recording.play();
      if (isLoop) recording.loop = true;
      else if (!isLoop) recording.loop = false;
    } else if (!play && pause) {
      recording.pause();
    } else {
      recording.pause();
      changeTime(0);
      recording.currentTime = 0;
    }

    recording.onended = () => {
      recording.currentTime = 0;
      dispatch(togglePlay(false));
    };
  }, [isLoop, play, pause]);

  useEffect(() => {
    if (audio.isMute) recording.volume = 0;
    else recording.volume = 1;
  }, [audio.isMute]);

  useEffect(() => {
    recording.currentTime = (timeToChange * 17) / 17000;
  }, [timeToChange]);

  const toggleMute = () => {
    const newAudio = { ...audio, isMute: !audio.isMute };
    dispatch(updateAudio(newAudio));
  };

  return (
    <div style={{ backgroundColor: audio.color }} className='audio'>
      <span className='audio-name'>{audio.name}</span>
      {audio.isMute && (
        <img className='mute-btn' onClick={toggleMute} src={muteSvg} alt='' />
      )}
      {!audio.isMute && (
        <img className='mute-btn' onClick={toggleMute} src={soundSvg} alt='' />
      )}
    </div>
  );
};

export default AudioPreview;

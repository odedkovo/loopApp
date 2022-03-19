import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateItem, stopSound } from '../store/item.action';

import muteSvg from '../assets/imgs/svg/mute.svg';
import soundSvg from '../assets/imgs/svg/sound.svg';

const AudioCmp = ({ time, time1, changeTime, audio }) => {
  const dispatch = useDispatch();

  const { play } = useSelector((state) => ({
    play: state.itemModule.play,
  }));

  const { loop } = useSelector((state) => ({
    loop: state.itemModule.loop,
  }));

  const [recording, setRecording] = useState(new Audio());
  const intervalId = useRef();

  useEffect(() => {
    recording.src = require(`../assets/audios/${audio.name}.mp3`);
  }, []);

  useEffect(() => {
    recording.ontimeupdate = () => {
      changeTime((recording.currentTime / 17) * 17000);
    };

    if (play) {
      recording.play();
      if (loop) recording.loop = true;
      else if (!loop) recording.loop = false;
    } else {
      recording.pause();
      changeTime(0);
      recording.currentTime = 0;
    }

    recording.onended = () => {
      recording.currentTime = 0;
      dispatch(stopSound());
    };
  }, [loop, play]);

  useEffect(() => {
    if (audio.isMute) recording.volume = 0;
    else recording.volume = 1;
  }, [audio.isMute]);

  useEffect(() => {
    recording.currentTime = (time1 * 17) / 17000;
  }, [time1]);

  const toggleMute = () => {
    const newAudio = { ...audio, isMute: !audio.isMute };
    dispatch(updateItem(newAudio));
  };

  return (
    <div style={{ backgroundColor: audio.color }} className='audio'>
      <span className='audio-name'>{audio.name}</span>
      <input
        min={0}
        max={17000}
        onChange={() => {}}
        type='range'
        value={time}
      />
      {audio.isMute && (
        <img className='mute-btn' onClick={toggleMute} src={muteSvg} alt='' />
      )}
      {!audio.isMute && (
        <img className='mute-btn' onClick={toggleMute} src={soundSvg} alt='' />
      )}
    </div>
  );
};

export default AudioCmp;

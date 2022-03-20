import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AudioList from '../cmps/AudioList.jsx';
import { togglePlay, toggleLoop, togglePause } from '../store/audio.action.js';
import music1 from '../assets/imgs/svg/music1.svg';
import music2 from '../assets/imgs/svg/music2.svg';
import music3 from '../assets/imgs/svg/music3.svg';

export function HomePage() {
  const dispatch = useDispatch();

  const { isLoop } = useSelector((state) => state.audioModule);

  const [recordingTime, setRecordingTime] = useState(0); //state variable -showing the time on progress bar and change due to recording time
  const [timeToChange, setTimeToChange] = useState(0); //when changing time manualy on progress bar this variable changing -  audioPreview listening to this variable and when is changes the recording time changing to this state value.

  const changeTime = (val) => {
    setRecordingTime(val);
  };
  const onTogglePlay = (boolean) => {
    dispatch(togglePause(false));
    dispatch(togglePlay(boolean));
  };

  const onToggleLoop = () => {
    console.log('toggle');
    dispatch(toggleLoop());
  };

  const onPause = () => {
    dispatch(togglePlay(false));
    dispatch(togglePause(true));
  };

  const TimeLineToShow = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  ];

  return (
    <section className='home-page'>
      <section className='audios'>
        <div className='control-panel'>
          <span className='cursor'>Cursor:</span>

          <section className='range-section'>
            <input
              className='top-range'
              min='0'
              max='17000'
              type='range'
              value={recordingTime}
              onChange={(ev) => {
                setTimeToChange(ev.target.value);
              }}
            />
            <div className='time-line'>
              {TimeLineToShow.map((num) => {
                return <span className='num-to-display'>{num}</span>;
              })}
            </div>
          </section>
        </div>
        <AudioList timeToChange={timeToChange} changeTime={changeTime} />
      </section>

      <section className='control-btns'>
        <button className='control-btn' onClick={() => onTogglePlay(true)}>
          <span className='text'>play</span>
        </button>
        <button className='control-btn' onClick={() => onTogglePlay(false)}>
          <span className='text'>stop</span>
        </button>
        <button className='control-btn' onClick={onToggleLoop}>
          <span className='text'>Loop/{isLoop ? 'on' : 'off'}</span>
        </button>
        <button className='control-btn' onClick={onPause}>
          <span className='text'>pause</span>
        </button>
      </section>
      <img className='music1' src={music1} alt='' />
      <img className='music2' src={music2} alt='' />
      <img className='music3' src={music3} alt='' />
    </section>
  );
}

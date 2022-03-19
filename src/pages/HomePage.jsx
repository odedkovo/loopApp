import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AudioCmp from '../cmps/AudioCmp.jsx';
import { playSound, stopSound, toggleLoop } from '../store/item.action.js';

export function HomePage() {
  const dispatch = useDispatch();

  const { audios } = useSelector((state) => ({
    audios: state.itemModule.audios,
  }));

  const { play } = useSelector((state) => ({
    play: state.itemModule.play,
  }));

  const { loop } = useSelector((state) => ({
    loop: state.itemModule.loop,
  }));

  const [time, setTime] = useState(0);
  const [time1, setTime1] = useState(0);

  const changeTime = (val) => {
    console.log('inchange');
    setTime(val);
  };
  const onPlay = () => {
    dispatch(playSound());
  };
  const onStop = () => {
    dispatch(stopSound());
    console.log(play);
  };

  const onToggleLoop = () => {
    console.log('toggle');
    dispatch(toggleLoop());
  };

  const moveTime = (ev) => {
    console.log('hi');
    setTime1(ev.target.value);
  };

  return (
    <section className='home-page'>
      <section className='audios slide-in-br'>
        <div className='controle-panel'>
          <span>Controle here:</span>
          <input
            min='0'
            max='17000'
            type='range'
            value={time}
            onChange={moveTime}
          />
        </div>

        {audios.map((audio) => {
          return (
            <AudioCmp
              key={audio._id}
              changeTime={changeTime}
              time={time}
              time1={time1}
              audio={audio}
            />
          );
        })}
      </section>

      <section className='controle-btns'>
        <button className='controle-btn' onClick={onPlay}>
          <span class='text'>play</span>
        </button>
        <button className='controle-btn' onClick={onStop}>
          <span class='text'>stop</span>
        </button>
        <button className='controle-btn' onClick={onToggleLoop}>
          <span class='text'>loop/{loop ? 'on' : 'off'}</span>
        </button>
      </section>
    </section>
  );
}

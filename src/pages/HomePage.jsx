import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AudioCmp from '../cmps/AudioCmp.jsx';

import { CrudlService } from '../services/crudl.service.js';
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

  const onPlay = () => {
    // dispatch(stopSound());
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

  if (!audios) return <div>loading...</div>;
  return (
    <section className='home-page'>
      <h1>homepage</h1>

      {/* <button onClick={testAudio}>click</button>
      <button
        onClick={() => {
          oded.pause();
        }}
      >
        click
      </button> */}

      <section className='audios slide-in-br'>
        {audios.map((audio) => {
          return (
            <AudioCmp
              key={audio._id}
              audio={audio}
              color={audio.color}
              isMute={audio.isMute}
              name={audio.name}
            />
          );
        })}
      </section>

      <section className='controle'>
        <button onClick={onPlay}>play</button>
        <button onClick={onStop}>stop</button>
        <button onClick={onToggleLoop}>loop/{loop ? 'on' : 'off'}</button>
      </section>
    </section>
  );
}

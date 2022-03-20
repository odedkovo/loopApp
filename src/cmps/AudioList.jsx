import React from 'react';
import { useSelector } from 'react-redux';
import AudioPreview from './AudioPreview.jsx';

const AudioList = ({ timeToChange, changeTime }) => {
  const { audios } = useSelector((state) => state.audioModule);

  return (
    <section className='audio-list'>
      {audios.map((audio) => {
        return (
          <AudioPreview
            key={audio._id}
            changeTime={changeTime}
            timeToChange={timeToChange}
            audio={audio}
          />
        );
      })}
    </section>
  );
};

export default AudioList;

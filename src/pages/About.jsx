import React from 'react';
import oded from '../assets/imgs/imgs/oded.jpg';

export function About() {
  return (
    <section className='about-page'>
      <main className='main-content'>
        <span>about:</span>
        <p>
          My name is Oded kovo, 23 years old from Ness Ziona and this is my
          loopApp.
          <br />
          <br />
          In this project there are two pages.
          <br />
          The homepage and the about page.
          <br />
          The about page exlpain about me and about the app. The homepage is the
          Assignment.
          <br /> In the homepage there are 8 rows that represent 8 audio loops.
          Each of the channels shows the channel's name,mute button and a unique
          color. <br />
          On the bottom of the page there is a section with control buttons.
          Each button effects in a different way on the track:
          <ul>
            <li>
              Play : when pressed all channels start playing simultaneously.
            </li>
            <li>
              Stop: when pressed all playing channels stop and go back to start.
            </li>
            <li>
              isLoop: when active, each time the isLoop ends all channels
              immediately go back to start and play again
            </li>
            <li>
              Pause: when pressed all playing channels stop and and stays at
              their position.
            </li>
          </ul>
          <br /> On the top of the page there is a section with a control range
          . On that place you can see the progress bar that shows the recording
          current time . and you can manualy move the time .
          <br />
          <br />
          Thank you for reading!
        </p>
      </main>

      <img className='oded-img' src={oded} alt='' />
    </section>
  );
}

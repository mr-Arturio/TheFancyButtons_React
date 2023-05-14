import React, { useState } from 'react';
import './App.css';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';

function App() {

  const [light, setLight] = useState('off');

  const switchLight = () => setLight(light === "on" ? "off" : "on");
  // const switchLight = () => {
  //   if (light === 'on') {
  //     setLight('off');
  //   } else {
  //     setLight('on');
  //   }
  // }

  const dark = (light === 'off') ? 'dark' : '';

  return (
    <div className={`App ${dark}`}>
    <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton light={light} switchLight={switchLight}/>
        <TextRepeaterButton />
      </section>
    </div>
  );
}

export default App;

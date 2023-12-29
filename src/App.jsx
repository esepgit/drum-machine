import { useState, useEffect } from 'react'
import './App.css';

const sounds = {
  Q: "Kick",
  W: "Kick_n_Hat",
  E: "Clap",
  A: "Closed_HH",
  S: "Open_HH",
  D: "Guitar_1",
  Z: "Guitar_2",
  X: "Guitar_3",
  C: "Guitar_4"
}

function App() {
  const [on, setOn] = useState(true);
  const [volume, setVolume] = useState(0.5);

  const handlePower = () => {
    setOn(!on);
  }

  const handleVolume = (e) => {
    if (on) {
      const display = document.getElementById('display');
      display.innerHTML = "";
      display.innerHTML = `Volume: ${e.target.value * 10}`;
      setTimeout(() => {
        display.innerHTML = "";
      }, 1500);
      setVolume(e.target.value);
    }
    
  }

  const handleClick = (id) => {
    document.getElementById(id).volume = volume;
    document.getElementById(id).play();

    const pad = document.getElementById(id + "-pad");
    pad.style.backgroundColor = "orange";
    setTimeout(() => {
      pad.style.backgroundColor = "black";
    }, 300);

    const display = document.getElementById('display');
    display.innerHTML = "";
    display.innerHTML = sounds[id];
    setTimeout(() => {
      display.innerHTML = "";
    }, 1500);
  }

  const handleKeyDown = (e) => {
    if (on) {
      if (e.key === 'q'|| e.key === 'Q') {
        handleClick('Q');
      }
    
      if (e.key === 'w' || e.key === 'W') {
        handleClick('W');
      }

      if (e.key === 'e' || e.key === 'E') {
        handleClick('E');
      }

      if (e.key === 'a' || e.key === 'A') {
        handleClick('A');
      }

      if (e.key === 's' || e.key === 'S') {
        handleClick('S');
      }

      if (e.key === 'd' || e.key === 'D') {
        handleClick('D');
      }

      if (e.key === 'z' || e.key === 'Z') {
        handleClick('Z');
      }

      if (e.key === 'x' || e.key === 'X') {
        handleClick('X');
      }

      if (e.key === 'c' || e.key === 'C') {
        handleClick('C');
      }
  }
}

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  })

  return (
      <div id="drum-machine">
        
        <div className="drum-pad-container">
          <button id="Q-pad" className={on ? 'drum-pad pad-first-row-on' : 'drum-pad pad-off'} onClick={() => handleClick('Q')}><audio id='Q' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'></audio>Q</button>
          <button id="W-pad"className={on ? 'drum-pad pad-first-row-on' : 'drum-pad pad-off'} onClick={() => handleClick('W')}><audio id='W' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'></audio>W</button>
          <button id="E-pad"className={on ? 'drum-pad pad-first-row-on' : 'drum-pad pad-off'} onClick={() => handleClick('E')}><audio id='E' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'></audio>E</button>
          <button id="A-pad" className={on ? 'drum-pad pad-second-row-on' : 'drum-pad pad-off'} onClick={() => handleClick('A')}><audio id='A' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'></audio>A</button>
          <button id="S-pad" className={on ? 'drum-pad pad-second-row-on' : 'drum-pad pad-off'} onClick={() => handleClick('S')}><audio id='S' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'></audio>S</button>
          <button id="D-pad" className={on ? 'drum-pad pad-second-row-on' : 'drum-pad pad-off'} onClick={() => handleClick('D')}><audio id='D' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio>D</button>
          <button id="Z-pad"className={on ? 'drum-pad pad-third-row-on' : 'drum-pad pad-off'} onClick={() => handleClick('Z')}><audio id='Z' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'></audio>Z</button>
          <button id="X-pad"className={on ? 'drum-pad pad-third-row-on' : 'drum-pad pad-off'} onClick={() => handleClick('X')}><audio id='X' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'></audio>X</button>
          <button id="C-pad"className={on ? 'drum-pad pad-third-row-on' : 'drum-pad pad-off'} onClick={() => handleClick('C')}><audio id='C' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'></audio>C</button>
        </div>
        <div className="controls">
          <button id="power" className={on ? 'power btn-power-on' : 'power btn-power-off'} onClick={handlePower}>Power</button>
          <div id="display" className={on ? 'display-on' : 'display-off'}></div>
          <input value={volume} type="range" id='volume' name='volume' min={0} max={1} step={0.1} onChange={handleVolume} />
        </div>
      </div>
  )
}

export default App

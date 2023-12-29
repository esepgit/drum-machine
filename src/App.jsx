import { useState } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const handleClick = (id) => {
    document.getElementById(id).play();
  }
  return (
      <div id="drum-machine">
        
        <div className="drum-pad-container">
          <button className='drum-pad pad-first-row' onClick={() => handleClick('Q')} onKeyDown={() => handleKeyDown('Q')}><audio id='Q' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'></audio>Q</button>
          <button className='drum-pad pad-first-row' onClick={() => handleClick('W')}><audio id='W' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'></audio>W</button>
          <button className='drum-pad pad-first-row' onClick={() => handleClick('E')}><audio id='E' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'></audio>E</button>
          <button className='drum-pad pad-second-row' onClick={() => handleClick('A')}><audio id='A' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'></audio>A</button>
          <button className='drum-pad pad-second-row' onClick={() => handleClick('S')}><audio id='S' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'></audio>S</button>
          <button className='drum-pad pad-second-row' onClick={() => handleClick('D')}><audio id='D' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio>D</button>
          <button className='drum-pad pad-third-row' onClick={() => handleClick('Z')}><audio id='Z' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'></audio>Z</button>
          <button className='drum-pad pad-third-row' onClick={() => handleClick('X')}><audio id='X' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'></audio>X</button>
          <button className='drum-pad pad-third-row' onClick={() => handleClick('C')}><audio id='C' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'></audio>C</button>
        </div>
        <div className="controls">
          <button className='power'>Power</button>
          <div id="display"></div>
          <input type="range" id='volume' name='volume' min={0} max={11} />
          <button className='bank'>Bank</button>
        </div>
      </div>
  )
}

export default App

import { useState } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div id="drum-machine">
        
        <div className="drum-pad-container">
          <button className='drum-pad'><audio id='Q' className='clip' src=''></audio>Q</button>
          <button className='drum-pad'>W</button>
          <button className='drum-pad'>E</button>
          <button className='drum-pad'>A</button>
          <button className='drum-pad'>S</button>
          <button className='drum-pad'>D</button>
          <button className='drum-pad'>Z</button>
          <button className='drum-pad'>X</button>
          <button className='drum-pad'>C</button>
        </div>
        <div className="controls">
          <label class="switch">
            Power
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
          <div id="display"></div>
          <input type="range" id='volume' name='volume' min={0} max={11} />
          <label class="switch">
            Bank
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
        </div>
      </div>
  )
}

export default App

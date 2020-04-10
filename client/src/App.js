import React from 'react';
import PlayerList from "./PlayerList"
import usePinkMode from './hooks/usePinkMode';
import './App.css';

function App() {
     const [pinkMode, setPinkMode] = usePinkMode(false);
     const toggleMode = e => {
      e.preventDefault();
      setPinkMode(!pinkMode);
    };
 
    return (
      <div className="App">
        
<div className="pink-mode__toggle">
       <input type="button"
         onClick={toggleMode}
         className={pinkMode ? 'toggle toggled' : 'toggle'}
      /> Pink Mode
  </div>
      <PlayerList />
    </div>
    );
      
}


export default App;



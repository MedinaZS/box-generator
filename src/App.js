import React, { useState } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {

  const [boxes, setBoxes] = useState([
    { color: 'red', size: '150' },
    { color: 'blue', size: '150' }
  ]);

  const addBox = (color,size) => {
    setBoxes([...boxes, {color,size}]);
  }

  return (
    <div className="App">
      <BoxForm onNewBox={addBox} />
      <BoxDisplay boxes={boxes} />
    </div>
  );
}

export default App;

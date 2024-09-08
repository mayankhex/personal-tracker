import React from 'react';
import Glass from './Glass';

// Range of height (0, 350) = 15 blocks
const quantity = 23; // 1 block = 23.33

export default function Drink() {
  const [waterLevel, setWaterLevel] = React.useState(0);

  // Fetch from local storage if available
  React.useEffect(() => {
    if(localStorage.getItem(new Date().toDateString())) {
      setWaterLevel(parseInt(localStorage.getItem(new Date().toDateString())));
    } else {
      localStorage.setItem(new Date().toDateString(), 0);
    }
  }, []);

  const changeLevel = (value) => {
    value = waterLevel + value;
    if(value < 0 || value*quantity > 350) return;
    localStorage.setItem(new Date().toDateString(), value);
    setWaterLevel(value);
  }

  const clearLocalStorage = () => {
    localStorage.clear();
    setWaterLevel(0);
  }

  return (
    <div className='center-container'>
      <h2>Drink atleast 12 Glass of water daily</h2>
      <Glass isEmpty={!parseInt(waterLevel)} level={waterLevel} height={(15-waterLevel)*quantity} />
      <div>
        <button onClick={() => changeLevel(1)} className='bold-btn' style={{background: 'lightgreen'}}>Add</button>
        <button onClick={() => changeLevel(-1)} className='bold-btn' style={{background: 'red'}}>Remove</button>
      </div>
      <button onClick={clearLocalStorage} className='bold-btn' style={{marginTop: '0'}} disabled>Clear Local Storage</button>
    </div>
  )
}
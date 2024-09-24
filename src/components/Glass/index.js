import React from 'react';
import GlassFrame from './GlassFrame';

// Range of height (0, 350) = 15 blocks
const quantity = 23.33; // 1 block = 23.33

export default function Glass() {
  const [waterLevel, setWaterLevel] = React.useState(0);

  // Fetch from local storage if available
  React.useEffect(() => {
    const date = new Date().toDateString();
    if(localStorage.getItem(date)) {
      setWaterLevel(parseInt(localStorage.getItem(date)));
    } else {
      localStorage.setItem(date, 0);
    }
  }, []);

  const changeLevel = (value) => {
    value = waterLevel + value;
    if(value < 0 || value*quantity > 350) return;
    setWaterLevel(value);

    const date = new Date().toDateString();
    if(localStorage.getItem(date)) {
      localStorage.setItem(date, value);
    } else {
      localStorage.setItem(date, (value > 0) ? 1:0);
    }
  }

  const clearLocalStorage = () => {
    localStorage.clear();
    setWaterLevel(0);
  }

  return (
    <div className='center-container'>
      <h2 style={{color: 'burlywood'}}>Drink atleast 12 Glass of water daily</h2>
      <GlassFrame isEmpty={!parseInt(waterLevel)} level={waterLevel} height={(15-waterLevel)*quantity} />
      <div>
        <button onClick={() => changeLevel(1)} className='bold-btn' style={{background: 'lightgreen'}}>Add</button>
        <button onClick={() => changeLevel(-1)} className='bold-btn' style={{background: 'red'}}>Remove</button>
      </div>
      <button onClick={clearLocalStorage} className='bold-btn mt-0' disabled>Clear Local Storage</button>
    </div>
  )
}
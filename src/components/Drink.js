import React, { useEffect } from 'react';
import GlassImg from '../images/glass.png';
import GlassPartiallyFilledImg from '../images/glass-partially-filled.png';
import WaterLayer from '../images/water-layer.png';

const styles = {
  position: 'absolute',
  borderTop: '2px solid red',
  background: '#76cae8',
  width: '14.6rem',
  bottom: '15px',
  right: '1.5%'
};

export function Glass(props) {
  return (
    <div style={{position: 'relative'}}>
      <img style={{width: '15rem'}} src={ (props.isEmpty) ? GlassImg : GlassPartiallyFilledImg} alt="glass" />
      {
        !(props.isEmpty) &&
        <>
          <div style={{...styles, height: props.height}}>
            <div style={{position: 'absolute', top: '-0.7rem'}}>
              <img style={{width: '14.6rem'}} src={WaterLayer} alt="glass" />
            </div>
            <div style={{position: 'absolute', top: '50%', left: '50%'}}>{parseInt(props.level)}</div>
          </div>
        </>
      }
    </div>
  )
}

export default function Drink() {
  const [waterLevel, setWaterLevel] = React.useState(0);

  useEffect(() => {
    if(localStorage.getItem(new Date().toDateString())) {
      setWaterLevel(parseInt(localStorage.getItem(new Date().toDateString())));
    } else {
      localStorage.setItem(new Date().toDateString(), 0);
    }
  }, [])

  const addLevel = () => {
    localStorage.setItem(new Date().toDateString(), waterLevel + 1)
    setWaterLevel(waterLevel + 1)
  }

  const decreaseLevel = () => {
    localStorage.setItem(new Date().toDateString(), waterLevel - 1)
    setWaterLevel(waterLevel - 1)
  }

  const clearLocalStorage = () => {
    localStorage.clear();
    setWaterLevel(0);
  }

  return (
    <div className='center-container'>
      <h2>Drink atleast 12 Glass of water daily</h2>
      <Glass isEmpty={!parseInt(waterLevel)} level={waterLevel} height={`${waterLevel*6}%`} />
      <div>
        <button onClick={addLevel} className='glass-btn'>Add</button>
        <button onClick={decreaseLevel} className='glass-btn-remove'>Remove</button>
      </div>
      <button onClick={clearLocalStorage} className='local-storage-btn'>Clear Local Storage</button>
    </div>
  )
}
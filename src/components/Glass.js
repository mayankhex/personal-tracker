import React from 'react';  
import GlassSvg from './GlassSvg';

const labelStyle = {
  position: 'absolute',
  fontSize: '1.3rem',
  fontWeight: 'bold',
  color: 'white',
  top: '50%',
  left: '50%',
}

export default function Glass(props) {
  return (
    <div style={{position: 'relative'}}>
      <GlassSvg isEmpty={props.isEmpty} yAxis={props.height} waterBodyColor={'#a5b7d0'} waterLayerColor={'#d6e5f6'}/>
      <div style={labelStyle}>{parseInt(props.level)}</div> 
    </div>
  );
}
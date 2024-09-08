import React from 'react';

const layerStyle = {
  position: 'absolute',
  width: '14.6rem',
  bottom: '0.9rem',
  right: 0
};

export default function WaterLayer(props) {
  return (
    <div style={{...layerStyle, background: '#76cae8', right: '0.2rem', height: props.height}}>
      <svg style={{...layerStyle, top: '-0.65rem'}} height="50" width="100" xmlns="http://www.w3.org/2000/svg">
        <ellipse rx="118" ry="8" cx="117" cy="11" style={{fill:'lightblue', stroke:'black', strokeWidth:1}} />
      </svg>
    </div>
  );
}
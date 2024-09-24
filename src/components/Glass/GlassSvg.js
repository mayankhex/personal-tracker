import React from 'react';

const lineStyle = { 
  stroke: 'black',
  strokeWidth: 3
};

const GlassSVG = (props) => {
  return (
    <svg width="238" height="400"  xmlns="http://www.w3.org/2000/svg">
      {/* Glass Bottom */}
      <ellipse rx="118" ry="16" cx="119" cy="383" style={{ fill: (props.isEmpty) ? '#8f9090' : props.waterBodyColor, stroke: 'black', strokeWidth: 3 }}/>
      
      {
        /* Water Layer */ 
        !(props.isEmpty) && (<>
          <rect x="3" y={29 + props.yAxis} width="232" height={354 - props.yAxis} style={{ fill: props.waterBodyColor }}/>
          <ellipse rx="116" ry="16" cx="119" cy={30 + props.yAxis} style={{ fill: props.waterLayerColor }}/>
        </>)
      }

      {/* Glass Top */}
      <ellipse rx="118" ry="16" cx="119" cy="18" style={{ fill: 'none', stroke: 'black', strokeWidth: 3 }}/>
      {/* Glass Sides */}
      <line x1="1" y1="19" x2="1" y2="383" style={lineStyle}/>
      <line x1="237" y1="19" x2="237" y2="383" style={lineStyle}/>
    </svg>
  );
};

export default GlassSVG;

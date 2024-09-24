import React, { useEffect, useReducer } from 'react';
import EditableField from './EditableField';

const dragStyle = {
  width: '50vw',
  height: 'auto',
  cursor: 'move', /* Makes the cursor a 'move' icon when hovering */
  position: 'absolute',
  textAlign: 'left',
  background: 'lightpink',
  paddingLeft: '20px',
}

const initialState = {
  isDragging: false,
  offset: { x: 0, y: 0 },
  position: { x: 0, y: 0 },
};

const reducer = (state, action) => action;

export default function Draggable(props) {
  const [drag, setDrag] = useReducer(reducer, initialState);

  useEffect(() => {
    if(localStorage.getItem(props.dragId)) {
      setDrag(JSON.parse(localStorage.getItem(props.dragId)));
    } else {
      localStorage.setItem(props.dragId, JSON.stringify(initialState));
    }
  }, [props.dragId]);

  // Function to handle mouse down event (start dragging)
  const handleMouseDown = (e) => {
    const state = {
      ...drag,
      isDragging: true,
      offset: {
        x: e.clientX - drag.position.x,
        y: e.clientY - drag.position.y,
      }
    };
    setDrag(state);
    localStorage.setItem(props.dragId, JSON.stringify(state));
  };

  // Function to handle mouse move event (while dragging)
  const handleMouseMove = (e) => {
    if(drag.isDragging) {
      const position = {
        x: e.clientX - drag.offset.x,
        y: e.clientY - drag.offset.y
      }
      if(position.x < 0) position.x = 0;
      if(position.y < 0) position.y = 0;
      
      const state = { ...drag, position };
      setDrag(state);
      localStorage.setItem(props.dragId, JSON.stringify(state));
    }
  };

  // Function to handle mouse up event (stop dragging)
  const handleMouseUp = () => {
    const state = { ...drag, isDragging: false };
    setDrag(state);
    localStorage.setItem(props.dragId, JSON.stringify(state));
  }

  return (
    <div
      id={props.dragId}
      style={{...dragStyle, left: `${drag.position.x}px`, top: `${drag.position.y}px` }}
      onPointerDown={handleMouseDown}
      onPointerMove={handleMouseMove}
      onPointerUp={handleMouseUp}
      onDoubleClick={props.onDoubleClick}
    >
      <EditableField fieldId={props.dragId+'.head'} head={props.dragId} style={{margin: '0px 0px 6px 0px'}}/>
      <EditableField fieldId={props.dragId+'.body'}/>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Draggable from './Draggable';

const resumeStyle = {
  border: '2px solid yellow',
  height: '70vh',
  position: 'relative'
}

export default function Todos() {
  const [divIds, setDivIds] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('divIds')) {
      setDivIds(JSON.parse(localStorage.getItem('divIds')));
    } else {
      localStorage.setItem('divIds', JSON.stringify([]));
    }
  }, []);

  const addDragDiv = () => {
    const ids = [...divIds, uuidv4().substring(0,5)];
    setDivIds(ids);
    localStorage.setItem('divIds', JSON.stringify(ids));
  }

  const removeDraggableDiv = (e) => {
    console.log(e.target.id);
    const ids = divIds.filter((id) => id !== e.target.id)
    setDivIds(ids);
    localStorage.setItem('divIds', JSON.stringify(ids));
    localStorage.removeItem(e.target.id);
    localStorage.removeItem(e.target.id + '.head');
    localStorage.removeItem(e.target.id + '.body');
  }

  return (
    <>
      <button onClick={addDragDiv} style={{padding: '5px 8px', fontSize: '20px'}}> Add Block </button>
      <div id='template' style={resumeStyle}>
        {divIds.map((id) => <Draggable dragId={id} onDoubleClick={removeDraggableDiv} key={id} />)}
      </div>
    </>
  )
}
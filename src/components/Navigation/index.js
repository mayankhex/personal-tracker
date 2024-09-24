import React from 'react';
import { NavLink } from 'react-router-dom';

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  color: 'white',
  marginBottom: '3rem',
}

export default function Navigation() {
  return (
    <>
      { 
        <header style={navStyle}>
          <NavLink to="/"><button className='bold-btn'>Home</button></NavLink>
          <NavLink to="/about"><button className='bold-btn'>About</button></NavLink>
          <NavLink to="/todos"><button className='bold-btn'>Todos</button></NavLink>
        </header>
      }
    </>
  )
}

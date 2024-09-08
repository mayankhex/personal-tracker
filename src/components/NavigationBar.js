import { NavLink } from 'react-router-dom';

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  color: 'white',
  marginBottom: '3rem',
}

function NavigationBar() {
  return (
    <div style={navStyle}>
      <NavLink to="/"><button className='bold-btn'>Home</button></NavLink>
      <NavLink to="/about"><button className='bold-btn'>About</button></NavLink>
    </div>
  )
}

export default NavigationBar;
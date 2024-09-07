import { NavLink } from 'react-router-dom';

function NavigationBar() {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    color: 'white',
    marginBottom: '30px',
  }
  return (
    <div style={styles}>
      <NavLink to="/personal-tracker"><button className='pd-10'>Home</button></NavLink>
      <NavLink to="/personal-tracker/about"><button className='pd-10'>About</button></NavLink>
    </div>
  )
}

export default NavigationBar;
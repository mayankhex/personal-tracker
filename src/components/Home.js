import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../logo.svg';
import UserDetail from './UserDetail';
import NetworkLoader from './NetworkLoader';

export default function Home(props) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState({
    state: 1,
    msg: 'Fetching details from server...',
    style: {color: 'green'}
  });

  useEffect(() => {
    axios.get('http://localhost:3001').then(res => {
      console.log(res.data);
      setUser(res.data);
    }).catch(err => {
      console.log(err.message);
      setIsLoading({
        state: 0,
        msg: 'Network error',
        style: { color: 'red' }
      })
    })
  }, []);

  return (
    <div style={{textAlign: 'left'}} className='center-container'> {props.name}
      <img src={logo} className="App-logo" alt="logo" />
      <h3> Welcome to my personal-tracker website </h3>
      { (user) ? (<UserDetail details={user}/>) : (<NetworkLoader isLoading={isLoading}/>) }
    </div>
  );
}
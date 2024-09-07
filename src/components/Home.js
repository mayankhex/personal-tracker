import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../logo.svg';

export function UserDetails({ details }) {
  return (
    <div>
      <h4>Hi {details.fullname} enjoy your day.</h4>
      <h6>Age: {details.age}</h6>
      <h6>Address: {details.address}</h6>
    </div>
  )
}

export function Loader({ isLoading }) {
  return (<p style={{...isLoading.style, textAlign: 'center'}}>
    { (isLoading.state === 1) ? isLoading.msg : 'Network error' }
  </p>);
}

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
    <div style={{textAlign: 'left', display: 'flex', flexDirection: 'column'}} className='center-container'> {props.name}
      <img src={logo} className="App-logo" alt="logo" />
      <h3> Welcome to my personal-tracker website </h3>
      { (user) ? (<UserDetails details={user}/>) : (<Loader isLoading={isLoading}/>) }
    </div>
  );
}
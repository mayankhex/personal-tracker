import React from 'react';

export default function UserDetails({ details }) {
  return (
    <div>
      <h4>Hi {details.fullname} enjoy your day.</h4>
      <h6>Age: {details.age}</h6>
      <h6>Address: {details.address}</h6>
    </div>
  )
}
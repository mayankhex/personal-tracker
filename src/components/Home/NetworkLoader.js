import React from "react";

export default function NetworkLoader({ isLoading }) {
  return (<p style={{...isLoading.style, textAlign: 'center'}}>
    { (isLoading.state === 1) ? isLoading.msg : 'Network error' }
  </p>);
}
import React from 'react';
import '../style/coins.css';

export default (props) => {
  return (
    <div className="coin-div">
      <div className="coin">{`${props[name]}`}</div>
      <div className="badge"></div>
    </div>
  )
}

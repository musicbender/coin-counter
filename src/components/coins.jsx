import React from 'react';
import '../style/coins.css';

export default (props) => {
  const { name, coin, badge, selectedCoin, selectCoin } = props;

  const selected = () => {
    return name ===  selectedCoin ? "selected" : '';
  }

  const handleClick = () => {
    if (name !== selectedCoin) {
      selectCoin(name);
    }
  }

  return (
    <div className="coin-div">
      <div className={`coin ${name} ${selected()}`} onClick={() => handleClick()}>
        <span>{props.coin}</span>
      </div>
      <div className={`badge badge-${badge} ${props.badge ? "show" : ""}`}>
        <span>{props.badge ? props.badge : ''}</span>
      </div>
    </div>
  )
}

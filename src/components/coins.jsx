import React from 'react';
import '../style/coins.css';
import '../style/arrows.css';

export default (props) => {
  const { name, coin, badge } = props;

  const handleArrowClick = (dir) => {
    props.changeValue(dir, name);
  }

  const getArrows = () => {
    if (name !== 'coin4') {
      return (
        <div>
          <div className="arrow-up" onClick={() => handleArrowClick(1)}></div>
          <div className="arrow-down" onClick={() => handleArrowClick(-1)}></div>
        </div>
      )
    }
  }

  return (
    <div className="coin-div">
      <div className={`coin ${name}`}>
        <span className="unselectable">{props.coin}</span>
      </div>
      <div className={`badge badge-${badge} ${props.badge ? "show" : "hide"}`}>
        <span className="unselectable">{props.badge ? props.badge : ''}</span>
      </div>
      {getArrows()}
    </div>
  )
}

import React from 'react';
import '../style/coins.css';
import '../style/arrows.css';

export default (props) => {
  const { name, coin, badge } = props;

  const handleArrowClick = (dir) => {
    props.changeValue(dir, name);
    props.clearBadges();
  };

  const getArrows = () => {
    if (name !== 'coin4') {
      return (
        <div>
          <div className="arrow-up" onClick={() => handleArrowClick(1)} />
          <div className="arrow-down" onClick={() => handleArrowClick(-1)} />
        </div>
      );
    }
  };

  return (
    <div className="coin-div">
      <div className={`coin ${name}`}>
        <span className="unselectable">{coin}</span>
      </div>
      <div className={`badge badge-${badge} ${badge ? "show" : "hide"}`}>
        <span className="unselectable">{badge || ''}</span>
      </div>
      {getArrows()}
    </div>
  );
};

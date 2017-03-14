import React from 'react';
import '../style/coins.css';
import '../style/arrows.css';

// reuseable component used by each coin

const Coins = (props) => {
  const { name, coin, badge } = props;

  // when arrows clicked, change coin values and clear badges
  const handleArrowClick = (dir) => {
    props.changeValue(dir, name);
    props.clearBadges();
  };

  // get all arrows except for coin 4
  const getArrows = () => {
    if (name !== 'coin4') {
      return (
        <div>
          <button className="arrow-up" onClick={() => handleArrowClick(1)} />
          <button className="arrow-down" onClick={() => handleArrowClick(-1)} />
        </div>
      );
    }
  };

  // make badge wider for bigger numbers
  const badgeFit = () => {
    if (badge) {
      const b = badge.toString().length;
      return b > 4 ? "wide" : "";
    }
  };

  return (
    <div className="coin-div">
      <div className={`coin ${name}`}>
        <span className="unselectable">{coin}</span>
      </div>
      <div className={`badge badge-${badge} ${badge ? "show" : "hide"} ${badgeFit()}`}>
        <span className="unselectable">{badge || ''}</span>
      </div>
      {getArrows()}
    </div>
  );
};

Coins.propTypes = {
  coin: React.PropTypes.number.isRequired,
  badge: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  changeValue: React.PropTypes.func,
  clearBadges: React.PropTypes.func,
};

export default Coins;

import React from 'react';
import Coin from './coins.jsx';
import '../style/coin-section.css';

export default (props) => {
  const buildCoins = () => {
    const coinArray = [
      {name: 'coin1', badge: 'badge1' },
      {name: 'coin2', badge: 'badge2' },
      {name: 'coin3', badge: 'badge3' },
      {name: 'coin4', badge: 'badge4' }
    ];

    const coinList = coinArray.map((coin) => {
      return (
        <Coin
          coin={props[coin.name]}
          name={coin.name}
          key={coin.name}
          badge={props[coin.badge]}
          changeValue={props.changeValue}
          clearBadges={props.clearBadges}
        />
      )
    });

    return coinList;
  }

  return (
    <div className="coin-container">
      <div>{buildCoins()}</div>
    </div>
  )
};

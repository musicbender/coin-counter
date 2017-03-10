import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCoin, calculateInput, incrementValue, decrementValue } from '../actions/index';
import Title from '../components/title.jsx';
import CoinSection from '../components/coin-section.jsx';
import Input from '../components/input.jsx';
import calculate from '../util/calculate';

class App extends Component {
  constructor(props) {
    super(props);
  }

  changeValue(dir) {
    return;
  }

  render() {
    var coinSet = {"coin1": 25, "coin2": 10, "coin3": 5, "coin4": 1}
    var amount = 18;

    console.log(calculate.get(amount, coinSet));

    const coins = {
      coin1: this.props.allCoins[0],
      coin2: this.props.allCoins[1],
      coin3: this.props.allCoins[2],
      coin4: this.props.allCoins[3]
    }

    const badges = {
      badge1: this.props.badge1,
      badge2: this.props.badge2,
      badge3: this.props.badge3,
      badge4: this.props.badge4
    }

    return (
        <div className="main-container">
          <Title />
          <CoinSection
            {...coins}
            {...badges}
            selectCoin={this.props.selectCoin}
            selectedCoin={this.props.selectedCoin}
          />
          <Input calculateInput={this.props.calculateInput} />
        </div>
    )
  }
}

function mapStateToProps({coins, coinBadge}) {
  const { selectedCoin, allCoins } = coins;
  const { badge1, badge2, badge3, badge4 } = coinBadge;

  return {
    selectedCoin,
    allCoins,
    badge1,
    badge2,
    badge3,
    badge4
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectCoin,
    calculateInput,
    incrementValue,
    decrementValue
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

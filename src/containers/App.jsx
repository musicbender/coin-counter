import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { calculateInput, incrementValue, decrementValue } from '../actions/index';
import Title from '../components/title.jsx';
import CoinSection from '../components/coin-section.jsx';
import Input from '../components/input.jsx';
import calculate from '../util/calculate';

class App extends Component {
  constructor(props) {
    super(props);

    this.changeValue = this.changeValue.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
  }

  changeValue(dir, coin) {
    if (dir === 1) {
      this.props.incrementValue(coin);
    } else {
      this.props.decrementValue(coin);
    }
  }

  getCoinObj() {
    const { coin1, coin2, coin3, coin4 } = this.props;
    return {
      coin1,
      coin2,
      coin3,
      coin4
    }
  }

  getBadgeObj() {
    const { badge1, badge2, badge3, badge4 } = this.props;
    return {
      badge1,
      badge2,
      badge3,
      badge4
    }
  }

  handleCalculate(input) {
    const { coin1, coin2, coin3, coin4 } = this.props;
    this.props.calculateInput(input, this.getCoinObj());
  }

  render() {
    const coins = this.getCoinObj(),
          badges = this.getBadgeObj();

    return (
        <div className="main-container">
          <Title />
          <CoinSection
            {...coins}
            {...badges}
            changeValue={this.changeValue}
          />
          <Input handleCalculate={this.handleCalculate} />
        </div>
    )
  }
}

function mapStateToProps({coins, coinBadge}) {
  const { coin1, coin2, coin3, coin4 } = coins;
  const { badge1, badge2, badge3, badge4 } = coinBadge;

  return {
    coin1,
    coin2,
    coin3,
    coin4,
    badge1,
    badge2,
    badge3,
    badge4
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    calculateInput,
    incrementValue,
    decrementValue
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

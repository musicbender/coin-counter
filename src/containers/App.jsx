import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCoin, calculateInput, incrementValue, decrementValue } from '../actions/index';
import Title from '../components/title.jsx';
import CoinSection from '../components/coin-section.jsx';
import Input from '../components/input.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  changeValue(dir) {
    return;
  }

  render() {
    const coins = {
      coin1: this.props.coin1,
      coin2: this.props.coin2,
      coin3: this.props.coin3,
      coin4: this.props.coin4
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
  const { selectedCoin, coin1, coin2, coin3, coin4 } = coins;
  const { badge1, badge2, badge3, badge4 } = coinBadge;

  return {
    selectedCoin,
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
    selectCoin,
    calculateInput,
    incrementValue,
    decrementValue
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

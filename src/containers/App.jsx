import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { calculateInput, incrementValue, decrementValue, clearBadges } from '../actions/index';
import Title from '../components/title.jsx';
import CoinSection from '../components/coin-section.jsx';
import Input from '../components/input.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.changeValue = this.changeValue.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
  }

  getCoinObj() {
    const { coin1, coin2, coin3, coin4 } = this.props;
    return {
      coin1,
      coin2,
      coin3,
      coin4,
    };
  }

  getBadgeObj() {
    const { badge1, badge2, badge3, badge4 } = this.props;
    return {
      badge1,
      badge2,
      badge3,
      badge4,
    };
  }

  changeValue(dir, coin) {
    if (dir === 1) {
      this.props.incrementValue(coin);
    } else {
      this.props.decrementValue(coin);
    }
  }

  handleCalculate(input) {
    this.props.calculateInput(input, this.getCoinObj());
  }

  render() {
    const coins = this.getCoinObj();
    const badges = this.getBadgeObj();

    return (
      <div className="main-container">
        <Title />
        <CoinSection
          {...coins}
          {...badges}
          changeValue={this.changeValue}
          clearBadges={this.props.clearBadges}
        />
        <Input handleCalculate={this.handleCalculate} />
      </div>
    );
  }
}

App.propTypes = {
  coin1: React.PropTypes.number.isRequired,
  coin2: React.PropTypes.number.isRequired,
  coin3: React.PropTypes.number.isRequired,
  coin4: React.PropTypes.number.isRequired,
  badge1: React.PropTypes.number.isRequired,
  badge2: React.PropTypes.number.isRequired,
  badge3: React.PropTypes.number.isRequired,
  badge4: React.PropTypes.number.isRequired,
  calculateInput: React.PropTypes.func,
  clearBadges: React.PropTypes.func,
  incrementValue: React.PropTypes.func,
  decrementValue: React.PropTypes.func,
};

function mapStateToProps({ coins, coinBadge }) {
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
    badge4,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    calculateInput,
    incrementValue,
    decrementValue,
    clearBadges,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

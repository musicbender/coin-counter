import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class HomeMenu extends Component {
  isHome() {
    const {pathname} = this.props;
    if (pathname !== "/") {
      return "home-blur";
    }
  }

  render() {
    return (
      <div className={`home-container ${this.isHome()}`}>
        <h1>Mug Math</h1>
        <Link to='sub-apps/cold-drip-timer/' className="home-app-btn" onlyActiveOnIndex>
          Cold Drip Timer
        </Link>
        <Link to='sub-apps/brew-calculator/' className="home-app-btn" onlyActiveOnIndex>
          Brew Calculator
        </Link>
        <Link to='sub-apps/roast-development-calculator/' className="home-app-btn" onlyActiveOnIndex>
          Roast Development Calculator
        </Link>
        <Link to='sub-apps/roast-moisture-calculator/' className="home-app-btn" onlyActiveOnIndex>
          Roast Moisture Calculator
        </Link>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    pathname: ownProps.location.pathname
  };
}

export default connect(mapStateToProps)(HomeMenu);

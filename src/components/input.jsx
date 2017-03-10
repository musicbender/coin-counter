import React, { Component } from 'react';
import '../style/input.css';

class Input extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleCalculate(this.input.value);
  }

  render() {
    return (
      <form className="input-container">
        <input type="text" ref={(input) => this.input = input}/>
        <button type="submit" onClick={this.handleSubmit}>CALCULATE</button>
      </form>
    )
  }
};

export default Input;

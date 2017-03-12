import React, { Component } from 'react';
import '../style/input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const maxLength = 9, value = e.target.value;

    this.setState({
      value: value.length < 9 ? value : value.slice(0, maxLength)
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleCalculate(this.input.value);
  }

  render() {
    return (
      <form className="input-container">
        <input
          type="number"
          value={this.state.value}
          onChange={(e) => this.handleChange(e)}
          ref={(input) => this.input = input}
        />
        <button type="submit" onClick={this.handleSubmit}>CALCULATE</button>
      </form>
    )
  }
};

export default Input;

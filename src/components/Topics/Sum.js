import React, { Component } from "react";

export default class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null,
    };
  }

  newNumber1(a) {
    this.setState({ number1: parseInt(a) });
  }
  newNumber2(a) {
    this.setState({ number2: parseInt(a) });
  }
  add(num1, num2) {
    this.setState({ sum: num1 + num2 });
  }

  render() {
    return (
      <div className="puzzleBoax sumPB">
        <h4> Sum </h4>
        <input
          className="inputLine"
          type="number"
          onChange={(e) => this.newNumber1(e.target.value)}
        ></input>
        <input
          className="inputLine"
          type="number"
          onChange={(e) => this.newNumber2(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.add(this.state.number1, this.state.number2)}
        >
          Add
        </button>
        <span className="resultsBox">Sum {this.state.sum}</span>
      </div>
    );
  }
}
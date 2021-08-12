import React, { Component } from "react";

export default class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      palindrome: "",
    };
  }

  handleChange(a) {
    this.setState({ userInput: a });
  }

  submit(userInput) {
    let a = userInput;
    let b = userInput;
    b = b.split("").reverse().join("");
    console.log(b);
    if (userInput === b) {
      this.setState({ palindrome: "true" });
    } else {
      this.setState({ palindrome: "false" });
    }
  }

  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4>Palindrome</h4>
        <input
          className="puzzleBox filterStringPB"
          onChange={(e) => this.handleChange(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.submit(this.state.userInput)}
        >
          Check
        </button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    );
  }
}

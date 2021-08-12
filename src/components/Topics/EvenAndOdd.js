import React, { Component } from 'react'

export default class EvenAndOdd extends Component {

     
        constructor() {
            super();

            this.state = {
                evenArray: [],
                addArray: [],
                userInput: ""
            }
        }
        handleChange(a) {
            this.setState({ userInput: a });
        }
    submit(userInput) {
        let numArr = userInput.split(', ')
        let evenA = []
        let oddA = []

        for( let i = 0; i < numArr.length; i++){
            if(numArr[i] % 2 === 0) {
                evenA.push( parseInt(numArr[i], 10))
            } else {
                oddA.push( parseInt(numArr[i], 10))
            }
        }
        this.setState({ evenArray: evenA, oddArray: oddA})
        console.log(oddA, evenA)
        
    }


    render() {
    return (
        <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={ () => { this.submit(this.state.userInput) } }>PUSH ME</button>
            <span className="resultsBox" >{JSON.stringify(this.state.evenArray)}</span>
            <span className="resultsBox">{JSON.stringify(this.state.oddArray)  }</span>
        </div>
    )}
};
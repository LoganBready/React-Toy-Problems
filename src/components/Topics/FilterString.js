import React, { Component } from 'react'

export default class FilterString extends Component {

    constructor() {
        super();
        this.state = {
            unFilteredArray: ['Logan', 'Michael', 'Wes', 'Mitchell','Nitin', 'Andrew'],
            userInput: '',
            filteredArray: []
        };
    }

    handleChange(a) {
        this.setState({userInput: a})
    }

    filterArray(userInput) {
        var unFilteredArray = this.state.unFilteredArray
        var filteredArray = [];

        for (let i = 0; i < unFilteredArray.length; i++) {
            if (unFilteredArray[i] === userInput){
                filteredArray.push(unFilteredArray[i])
            }
        }
        this.setState({ filteredArray: filteredArray });
    }

    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <span className="puzzleText"> Name {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.filterArray(this.state.userInput) }> DO SOMETHING</button>
                <span className="resultsBox FilterStringRB">Filter Name {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }


}




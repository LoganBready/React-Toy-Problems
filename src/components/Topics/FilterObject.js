import React, { Component } from 'react'

export default class FilterObject extends Component {

    constructor(){
        super();

        this.state = {
            unFilteredArray: [
                {
                    name: 'Mitchell',
                    age: 25,
                    hair: false,
                },
                {
                    name: 'Logan',
                    age: 28,
                    "hair color": 'Black',
                },
                {
                    name: 'Michael',
                    age: 25,
                    motorcycle: "Husqvarna",
                },
                {
                    name: 'Wes',
                    age: 19,
                    "facial hair": false,
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(a) {
        this.setState({ userInput: a })
    }

    filterArray(prop) {
        let unFiltered = this.state.unFilteredArray
        let filteredArray = []
        for(let i = 0; i < unFiltered.length; i++) {
            if( unFiltered[i].hasOwnProperty(prop)) {
                filteredArray.push(unFiltered[i])
            }
        }
        this.setState({ filteredArray: filteredArray })
    }

    render (){
        return(
            <div className="puzzleText">
                <h4> FILTER OBJECT </h4>
                <span className="puzzleText">Original {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterArray(this.state.userInput)}>DO SOMETHING</button>
                <span className="resultsBox filterObjectRB">Filtered{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

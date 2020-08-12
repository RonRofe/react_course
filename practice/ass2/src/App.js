import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: '',
  };

  inputChangedHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');

    text.splice(index, 1);
    this.setState({ userInput: text.join('') });
  };

  render() {
    let charList = this.state.userInput.split('').map(
      (char, index) => <Char character={char} key={index} clicked={() => this.deleteCharHandler(index)}></Char>,
    );

    return (
      <div>
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}></input>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}></Validation>
        {charList}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
  };

  switchNameHandler = () => {
    // console.log('Was clicked!')
    // this.state.persons[0].name = 'Ron';      WRONG
    this.setState({
      persons: [
        { name: 'Ron', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 37 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
      // <p>This is really working!</p>         NOT ALLOWED
    );
    // return React.createElement('div', { className: 'App' }, '', React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

import React, { Component } from 'react';

import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
  }

  constructor(props) {
    super(props);

    console.log('[App.js] constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);

    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');

    return true;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');

  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  nameChangeHandler = (event, id) => {
    const persons = [...this.state.persons];
    const personIndex = this.state.persons.findIndex((person) => person.id === id);
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    persons[personIndex] = person;
    this.setState({ persons });
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];

    persons.splice(index, 1);
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log('[App.js] render');

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}></Persons>
      );
    }

    return (
      <div className={classes.App}>
        <button onClick={() => this.setState({ showCockpit: false })}>Remove Cockpit</button>
        {
          this.state.showCockpit ?
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonsHandler}></Cockpit> :
            null
        }
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

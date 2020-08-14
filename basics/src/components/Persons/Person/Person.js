import React, { Component } from 'react';

import classes from './Person.css';

import Aux from '../../../hoc/Auxiliary';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');

        return (
            // <div className={classes.Person}>
            <Aux>
                <p onClick={this.props.click}>Im a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" value={this.props.name} onChange={this.props.changed}></input>
            </Aux>
            // </div>
        );
    }
};

export default Person;
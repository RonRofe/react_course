import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');

        return (
            // <div className={classes.Person}>
            <Fragment>
                { this.props.isAuth ? <p>Authenticated!</p> : <p>Please log in</p> }
                <p onClick={this.props.click}>Im a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    // ref={(inputEl) => this.inputElement = inputEl}
                    ref={this.inputElementRef}
                    type="text"
                    value={this.props.name}
                    onChange={this.props.changed}></input>
            </Fragment>
            // </div>
        );
    }
};

Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
};

export default withClass(Person, classes.Person);
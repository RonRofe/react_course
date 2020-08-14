import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';

import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();

        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...');

        return (
            // <div className={classes.Person}>
            <Fragment>
                { this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
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
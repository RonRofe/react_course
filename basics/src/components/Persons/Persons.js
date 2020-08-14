import React, { PureComponent } from 'react';

import Person from './Person/Person';
import AuthContext from '../../context/auth-context';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');

    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');

    //     if (nextProps.persons !== this.props.persons) {
    //         return true;
    //     }

    //     return false;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Person.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...');

        return (
            <AuthContext.Consumer>
                {
                    (context) => this.props.persons.map((person, index) => {
                        return (
                            <Person
                                name={person.name}
                                age={person.age}
                                click={() => this.props.clicked(index)}
                                changed={(event) => this.props.changed(event, person.id)}
                                key={person.id}
                                isAuth={this.props.isAuthenticated} />
                        );
                    })
                }
            </AuthContext.Consumer>
        );
    }
};

export default Persons;
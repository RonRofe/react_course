import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Im a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed}></input> 
        </div>
    );
};

export default Radium(person);
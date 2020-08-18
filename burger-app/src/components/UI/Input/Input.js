import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
    let $inputEl = null;

    switch (props.elemntType) {
        case 'input':
            $inputEl = (
                <input 
                    className={classes.InputElement}
                    {...props.elementConfig}
                    value={props.value}></input>
            );
            break;
        case 'textarea':
            $inputEl = (
                <textarea
                    className={classes.InputElement}
                    {...props.elementConfig}
                    value={props.value}></textarea>
            );
            break;
        default:
            $inputEl = (
                <input
                    className={classes.InputElement}
                    {...props.elementConfig}
                    value={props.value}></input>
            );
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {$inputEl}
        </div>
    );
};

export default input;
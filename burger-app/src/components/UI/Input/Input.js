import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
    let $inputEl = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case 'input':
            $inputEl = (
                <input
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.change}></input>
            );
            break;
        case 'textarea':
            $inputEl = (
                <textarea
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.change}></textarea>
            );
            break;
        case 'select':
            $inputEl = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.change}>
                    {
                        props.elementConfig.options.map((option) => {
                            return (
                                <option key={option.value} value={option.value}>
                                    {option.displayValue}
                                </option>
                            );
                        })
                    }
                </select>
            );
            break;
        default:
            $inputEl = (
                <input
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.change}></input>
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
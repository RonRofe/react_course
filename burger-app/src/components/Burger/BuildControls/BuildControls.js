import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => {
    const $controls = controls.map((ctrl) => {
        return (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                add={() => props.add(ctrl.type)}
                remove={() => props.remove(ctrl.type)}
                disabled={props.disabled[ctrl.type]}></BuildControl>
        );
    });

    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {$controls}
            <button
                className={classes.OrderButton}
                disabled={!props.purchaseable}
                onClick={props.order}>ORDER NOW</button>
        </div>
    );
};

export default buildControls;
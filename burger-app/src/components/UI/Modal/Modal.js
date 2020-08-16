import React from 'react';

import Aux from '../../../hoc/Auxiliry';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.module.css';

const modal = (props) => {
    const style = {
        transform: props.show ? 'TranslateY(0)' : 'TranslateY(-100vh)',
        opacity: props.show ? '1' : '0',
    };

    return (
        <Aux>
            <Backdrop show={props.show} click={props.close}></Backdrop>
            <div
                className={classes.Modal}
                style={style}>{props.children}</div>
        </Aux>
    );
};

export default modal;
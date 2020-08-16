import React from 'react';

import classes from './Modal.module.css';

const modal = (props) => {
    const style = {
        transform: props.show ? 'TranslateY(0)' : 'TranslateY(-100vh)',
        opacity: props.show ? '1' : '0',
    };

    return (
        <div
            className={classes.Modal}
            style={style}>{props.children}</div>
    );
};

export default modal;
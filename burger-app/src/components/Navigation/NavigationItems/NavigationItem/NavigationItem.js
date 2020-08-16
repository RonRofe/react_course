import React from 'react';

import classes from './NavigationItem.module.css';
import { checkPropTypes } from 'prop-types';

const navigationItem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <a
                className={props.active ? classes.active : null}
                href={checkPropTypes.link}>{props.children}</a>
        </li>
    );
};

export default navigationItem;
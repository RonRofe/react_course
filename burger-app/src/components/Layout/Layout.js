import React from 'react';

import Aux from '../../hoc/Auxiliry';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import clasess from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <Toolbar></Toolbar>
        <main className={clasess.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;
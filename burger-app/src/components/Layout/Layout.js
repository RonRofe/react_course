import React from 'react';

import Aux from '../../hoc/Auxiliry';

import clasess from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className={clasess.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;
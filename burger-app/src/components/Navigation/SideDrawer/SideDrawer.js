import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliry/Auxiliry';

import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
    const attachedClasses = [classes.SideDrawer];

    attachedClasses.push(props.open ? classes.Open : classes.Close);

    return (
        <Aux>
            <Backdrop show={props.open} click={props.close}></Backdrop>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo></Logo>
                </div>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;
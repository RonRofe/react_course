import React, { Component } from 'react';

import Aux from '../Auxiliry/Auxiliry';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import clasess from './Layout.module.css';

class Layout extends Component {
    state = {
        showSideDrawer: false,
    };

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false })
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    };

    render() {
        return (
            <Aux>
                <Toolbar toggleDrawer={this.sideDrawerToggleHandler}></Toolbar>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    close={this.sideDrawerCloseHandler}></SideDrawer>
                <main className={clasess.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;
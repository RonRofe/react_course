import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliry';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.module.css';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }
    
    render() {
        const style = {
            transform: this.props.show ? 'TranslateY(0)' : 'TranslateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
        };

        return (
            <Aux>
                <Backdrop show={this.props.show} click={this.props.close}></Backdrop>
                <div
                    className={classes.Modal}
                    style={style}>{this.props.children}</div>
            </Aux>
        );
    }
};

export default Modal;
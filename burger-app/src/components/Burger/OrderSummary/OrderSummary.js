import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliry';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    render() {
        const $ingredientSummary = Object.keys(this.props.ingredients).map((key) => {
            return (
                <li key={key}>
                    <span style={{ textTransform: 'capitalize' }}>{key}</span>: {this.props.ingredients[key]}
                </li>
            );
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>{$ingredientSummary}</ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button click={this.props.purcCancel} btnType="Danger">CANCEL</Button>
                <Button click={this.props.purcContinue} btnType="Success">CONTINUE</Button>
            </Aux>
        );
    }
};

export default OrderSummary;
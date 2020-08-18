import React, { Component, Fragment } from 'react';

import axios from '../../axios-orders';

import Aux from '../../hoc/Auxiliry/Auxiliry';
import Modal from '../../components/UI/Modal/Modal';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: false,
    };

    componentDidMount() {
        axios.get('https://react-course-bc39b.firebaseio.com/ingredients.json')
            .then((({ data }) => this.setState({ ingredients: data })))
            .catch((() => this.setState({ error: true })));
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedIngredients = {
            ...this.state.ingredients,
            [type]: oldCount + 1,
        };
        const newPrice = this.state.totalPrice + PRICES[type];

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        });

        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if (oldCount <= 0) {
            return;
        }

        const updatedIngredients = {
            ...this.state.ingredients,
            [type]: oldCount - 1,
        };
        const newPrice = this.state.totalPrice - PRICES[type];

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        });

        this.updatePurchaseState(updatedIngredients);
    };

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map((key) => ingredients[key])
            .reduce((sum, el) => sum + el, 0);

        this.setState({ purchaseable: sum > 0 });
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    };

    purchaseContinueHandler = () => {

        const params = [];

        for (const i in this.state.ingredients) {
            params.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }

        params.push('price=' + this.state.totalPrice);

        const query = params.join('&');

        this.props.history.push({
            pathname: '/checkout',
            search: '?' + query,
        });
    };

    render() {
        const disabledInfo = { ...this.state.ingredients };

        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let $orderSummary = null;
        let $burger =
            !this.state.error ? (
                <Spinner></Spinner>
            ) : (
                    <p>Ingredients can not be loaded</p>
                );

        if (!!this.state.ingredients) {
            $burger = (
                <Fragment>
                    <Burger ingredients={this.state.ingredients}></Burger>
                    <BuildControls
                        price={this.state.totalPrice}
                        purchaseable={this.state.purchaseable}
                        add={this.addIngredientHandler}
                        remove={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        order={this.purchaseHandler}></BuildControls>
                </Fragment>
            );

            if (!this.state.loading) {
                $orderSummary = (
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purcContinue={this.purchaseContinueHandler}
                        purcCancel={this.purchaseCancelHandler}></OrderSummary>
                );
            }
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} close={this.purchaseCancelHandler}>
                    {$orderSummary}
                </Modal>
                {$burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);
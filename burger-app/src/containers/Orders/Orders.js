import React, { Component } from 'react';
import axios from '../../axios-orders';

import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true,
    };

    componentDidMount() {
        axios.get('/orders.json').then(({ data }) => {
            const orders = [];

            for (const key in data) {
                orders.push({
                    id: key,
                    ...data[key],
                });
            }

            this.setState({ loading: false, orders });
        }).catch(() => {
            this.setState({ loading: false });
        });
    }

    render() {
        return (
            <div>
                <Order></Order>
                <Order></Order>
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);
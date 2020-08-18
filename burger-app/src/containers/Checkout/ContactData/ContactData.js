import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import classes from './ContactData.module.css';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name',
                },
                value: '',
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street',
                },
                value: '',
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP code',
                },
                value: '',
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country',
                },
                value: '',
            },
            email: {
                elementType: 'email',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your email',
                },
                value: '',
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'cheapest' },
                    ]
                },
                value: '',
            },
        },
        loading: false,
    };

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
        };

        axios.post('/orders.json', order)
            .then(() => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(() => this.setState({ loading: false }));
    };

    render() {
        const formData = [];

        for (const key in this.state.orderForm) {
            formData.push({
                id: key,
                config: this.state.orderForm[key],
            });
        }

        const $formElements = formData.map((field) => {
            return (
                <Input
                    key={field.id}
                    elementType={field.config.elemntType}
                    elementConfig={field.config.elementConfig}
                    value={field.config.value}></Input>
            );
        });

        let $form = (
            <form>
                {$formElements}
                <Button btnType="Success" click={this.orderHandler}>ORDER</Button>
            </form>
        );

        if (this.state.loading) {
            $form = (
                <Spinner></Spinner>
            );
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {$form};
            </div>
        );
    }
}

export default ContactData;
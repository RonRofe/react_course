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
                validation: {
                    required: true,
                },
                value: '',
                valid: false,
                touched: false,
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street',
                },
                validation: {
                    required: true,
                },
                value: '',
                valid: false,
                touched: false,
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP code',
                },
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                },
                value: '',
                valid: false,
                touched: false,
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country',
                },
                validation: {
                    required: true,
                },
                value: '',
                valid: false,
                touched: false,
            },
            email: {
                elementType: 'email',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your email',
                },
                validation: {
                    required: true,
                },
                value: '',
                valid: false,
                touched: false,
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' },
                    ]
                },
                value: '',
            },
        },
        loading: false,
    };

    checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required && value.trim() === '') {
            isValid = false;
        }

        if (rules.minLength && value.length < rules.minLength) {
            isValid = false;
        }

        if (rules.maxLength && value.length > rules.maxLength) {
            isValid = false;
        }

        return isValid;
    };

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true });

        const formData = {};

        for (const key in this.state.orderForm) {
            formData[key] = this.state.orderForm[key].value;
        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData,
        };

        axios.post('/orders.json', order)
            .then(() => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(() => this.setState({ loading: false }));
    };

    inputChangeHandler = (event, inputIdentifier) => {
        const updatedOrderForm = JSON.parse(JSON.stringify(this.state.orderForm));

        updatedOrderForm[inputIdentifier].value = event.target.value;
        updatedOrderForm[inputIdentifier].touched = true;
        updatedOrderForm[inputIdentifier].valid = this.checkValidity(
            updatedOrderForm[inputIdentifier].value,
            updatedOrderForm[inputIdentifier].validation,
        );

        console.log(updatedOrderForm[inputIdentifier])
        
        this.setState({ orderForm: updatedOrderForm });
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
                    elementType={field.config.elementType}
                    elementConfig={field.config.elementConfig}
                    value={field.config.value}
                    change={(event) => this.inputChangeHandler(event, field.id)}
                    invalid={!field.config.valid}
                    shouldValidate={!!field.config.validation}
                    touched={field.config.touched}></Input>
            );
        });

        let $form = (
            <form onSubmit={this.orderHandler}>
                {$formElements}
                <Button btnType="Success">ORDER</Button>
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
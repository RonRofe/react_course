import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.module.css';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients).map((key) => {
        return [...Array(props.ingredients[key])].map((_, i) => {
            return (
                <BurgerIngredient key={key + i} type={key}></BurgerIngredient>
            );
        });
    });

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            { transformedIngredients }
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
};

export default burger;
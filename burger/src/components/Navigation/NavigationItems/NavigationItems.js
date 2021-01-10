import React from 'react';
import classes from '../NavigationItems/NavigationItems.module.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import { checkPropTypes } from 'prop-types';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem>Checkout</NavigationItem>
    </ul>
);

export default navigationItems;
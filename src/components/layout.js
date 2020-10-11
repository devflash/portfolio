import React from 'react';
import Navigation from './nav';
import { Global } from '@emotion/core';
import { GlobalStyles } from '../styles/global';

export default ({ children }) => {
    return (
        <>
            <Global styles={GlobalStyles} />
            <Navigation />
            {children}
        </>
    )
};
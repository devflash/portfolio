import React from 'react';
import Navigation from './nav';
export default ({ children }) => {
    return (
        <>
            <Navigation />
            { children}
            <h1>Footer</h1>
        </>
    )
};
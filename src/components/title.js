import React from 'react';
import { css } from '@emotion/core';

const container = css`
    h1{
        color: #2c3e50;
        margin:0;
        text-align: center;
        padding-bottom: 10px;
        text-transform: uppercase;
    }
`;

const underline = css`
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    background:  #2c3e50;
    margin-left: auto;
    margin-right: auto;
`;

export default ({ title }) => (
    <div css={container}>
        <h1>{title || 'undefined'}</h1>
        <div css={underline}></div>
    </div>
)
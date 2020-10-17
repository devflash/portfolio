import React from 'react';
import { css } from '@emotion/core';
import { socialLinks } from '../constants';

const social = css`
    margin: 0;
    list-style: none;
    text-align: center;
    display: flex;
    padding: 0;
    li{
        height: 50px;
        width: 50px;
        background-color: #000;
        margin-right: 1em;
        line-height: 50px;
        border-radius: 50%;
        &:hover{
            background-color: #2ecc71;
        }
    }
`;
const linkIcon = css`
    font-size: 20px;
    color: #fff;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;

`;

export default () => (
    <ul css={social}>
        {
            socialLinks.map(({ id, link, icon }) => (
                <li key={id} >
                    <a css={linkIcon} href={link}>{icon}</a>
                </li>
            ))
        }
    </ul>
);
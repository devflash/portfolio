import React from 'react';
import { css } from '@emotion/core';
import profileImg from '../../static/images/profile.jpg';
import mountain from '../../static/images/mountains.jpg';

const heroContainer = css`
    width: 100%;
    height: calc(100vh - 100px);
    padding-top: 100px;
    /* background-image: linear-gradient(to right, #2980b9, rgba(255,0,0,0)); */
    background-image: url(${mountain});
    background-repeat: no-repeat;
    background-size: contain;
`;

const hero = css`
    height: 150px;
    width: 150px;
    border: 10px solid #2c3e50;
    border-radius: 50%;
    margin: 0 auto;
    background: url(${profileImg});

`;
const intro = css`
    h1{
        text-align: center;
        color: #2c3e50;
    }
`;

const subIntro = css`
    text-align: center;
    color: #2c3e50;
    max-width: 230px;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    span{
        font-size: 18px;
    }
`;


export default () => {
    return (
        <div css={heroContainer}>
            <div css={hero}>

            </div>
            <div css={intro}>
                <h1>Mrugesh Wadagbalkar</h1>
                <div css={subIntro}>
                    <span>Web Developer</span>
                    <span>Trekker</span>
                </div>
            </div>
        </div>
    )
};
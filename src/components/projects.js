import React from 'react';
import { css } from '@emotion/core';
import Title from './title';
const container = css`
    padding: 20px;
    margin: 0 auto;
    background-color: #f1f5f8;
`;
const grid = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media screen and (max-width: 768px){
        grid-template-columns: repeat(1, 1fr);     
    }
`;
const card = css`
    border:1px solid #fff;
    margin: 15px;
    padding:10px;  
    background-color: #fff; 
    border-radius: 5px;
    cursor: pointer;
    color: #2c3e50;
    position: relative;
    z-index: 1;
    transition: all 0.8s ease-in-out;
    h3{
        font-size: 20px;
    }
    p{
        font-size: 18px;
    }
    &:hover{
        transform: translateY(-15px);
        color: #fff;
    }
    &:before{
        content:"";
        height: 100%;
        width: 100%;
        position: absolute;
        clip-path: circle(0%);
        background-color: #2c3e50;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all 0.8s ease-in-out;
        border-radius: 5px;
    }
    &:hover::before{
        clip-path: circle(100%);
    }
`;

export default () => (
    <div css={container}>
        <Title title="Projects"/>
        <div css={grid}>
            <div css={card}>
                <div>
                    <h3>Image Steganography</h3>
                    <p>Java application which illustrates the working of three different algorithms and calculates the efficiency based on the parameters such as image distortion.</p>
                </div>
            </div>
            <div css={card}>
                <h3>Social site</h3>
                <p>Web application having basic features such as creating groups, sharing posts and chat.</p>
            </div>
            <div css={card}>
                <h3>Recipe Provider</h3>
                <p>Web application to search, view and bookmark the food recipes.</p>
            </div>
            <div css={card}>
                <h3>Project Management System</h3>
                <p>Small scaled React application to create and manage projects</p>
            </div>
            <div css={card}>
                <h3>Burger builder</h3>
                <p>React application to create burger with choices of ingredients to add and order online.</p>
            </div>
        </div>
    </div>
)
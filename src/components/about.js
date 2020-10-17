import React from 'react'
import { css } from '@emotion/core';
import Title from '../components/title';

const container = css`
    background-color: #ecf0f1;
    padding: 1.5rem;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 100;
    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 50%;
        width: 20%;
        background-color: #e67e22;
        z-index: -100;
        border-top-right-radius: 50%;
        @media screen and (max-width: 768px){
            width: 25%;
            height: 25%
        }
    }
    &::after{
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        height: 50%;
        width: 20%;
        background-color: #e67e22;
        z-index: -100;
        border-bottom-left-radius: 50%;
        @media screen and (max-width: 768px){
            width: 25%;
            height: 25%
        }
    }
`;
const aboutSection = css`
    display: flex;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    justify-content: space-evenly;
    margin-bottom: 10px;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
    section{
        color: #2c3e50;
        font-size: 20px;
        text-align: left;
        width: 50%;
        p{
            margin: 0;
            line-height: 30px;
        }
        @media screen and (max-width: 768px){
            width: 100%;
        }
    }
`;

const resumeBtn = css`
    display: block;
    text-align: center;
    background-color: #2ecc71;
    color: #fff;
    font-size: 25px;
    cursor: pointer;
    text-decoration: none;
    margin: 20px auto;
    max-width: 150px;
    width: 40%;
    position: relative;
    &::before{
        position:absolute;
        content: "";
        width: 0;
        height: 2px;
        left: 0;
        top: 0;
        background-color: #2c3e50;
        transition: all 0.4s;
    }
    &::after{
        position:absolute;
        content: "";
        width: 0;
        height: 2px;
        right: 0;
        bottom: 0;
        background-color: #2c3e50;
        transition: all 0.4s;
    }
    &:hover:before{
        width: 100%;
    }
    &:hover:after{
        width: 100%;
    }
    span{
        display: block;
        padding: 1rem 0;
        &::before{
            position:absolute;
            content: "";
            width: 2px;
            height: 0px;
            left: 0;
            top: 0;
            background-color: #2c3e50;
            transition: all 0.4s;
        }
        &::after{
            position:absolute;
            content: "";
            width: 2px;
            height: 0px;
            right: 0;
            bottom: 0;
            background-color: #2c3e50;
            transition: all 0.4s;
        }
        &:hover:before{
            height: 100%;
        }
        &:hover:after{
            height: 100%;
        }
        
    }
`;

export default () => (
    <div css={container}>
        <div>
            <Title title="about me" />
            <div css={aboutSection}>
                <section>
                    <p><b>I am a passionate and dedicated web developer.</b></p>
                    <p><b>I have equipped skills to develop modern and responsive websites and constantly shaping my skills for better development.</b></p>
                </section>
                <section>
                    <p><b>I am also fond of trekking. Checkout blog section for exciting stories and amazing pictures.</b></p>
                </section>
            </div>
            <a css={resumeBtn}>
                <span>Resume</span>
            </a>

        </div>
    </div>
)
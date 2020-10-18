import React from 'react';
import { css, keyframes } from '@emotion/core';
import { navigationLinks } from '../constants';
import { Link } from "gatsby"
import { ImCross } from 'react-icons/im'

const sidebar = css`
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: #ecf0f1;
    top: 0;     
    z-index: 999;
    transform: translateX(100%);
    transition: all 1s ease-in-out 1.25s ;
`;
const container = css`
     display: flex;
     align-items: center;
     height: 100%;
`;

const slideRight = keyframes`
    0%{
        transform: translateX(-100%);
        opacity: 0;
    }
    100%{
        transform: translateX(0%);
        opacity: 1;
    }
`;

const slideLeft = keyframes`
    0%{
        transform: translateX(100%);
        opacity: 0;
    }
    100%{
        transform: translateX(0%);
        opacity: 1;
    }
`;

const sidebarLinks = css`
    margin: 0;
    padding: 0;
    list-style: none;
    height: auto;
    width: 100%;
    text-align: center;
    li{
        width: 100%;
        text-align: center;
        align-self: center;
        margin-bottom: 1.5rem;
        opacity: 0;
        &:nth-child(even){
            animation: ${slideLeft} 1s ease-in-out 1s forwards;
        }
        &:nth-child(odd){
            animation: ${slideRight} 1s ease-in-out 0.3s forwards;
        }
        &:nth-child(1){
            animation-delay: .25s;
        }
        &:nth-child(2){
            animation-delay: .5s;
        }
        &:nth-child(3){
            animation-delay: 1s;
        }
        &:nth-child(4){
            animation-delay: 1.25s;
        }
        &:nth-child(5){
            animation-delay: 1.5s;
        }
    }
    a{
        text-decoration: none;
        font-size: 25px;
        color:#2c3e50;
        text-transform: uppercase;
        font-weight: 800;
    }
`;
const crossIcon = css`
    position: absolute;
    top: 2.75%;
    right: 4.75%;
    font-size: 30px;
    color: #c0392b;
`;

const showSidebar = css`
    transform: translateX(0);
`;

export default ({ show, closeSidebar }) => (
    <>
        {
            show && (<div css={[sidebar, show && showSidebar]}>
                <ImCross css={crossIcon} onClick={closeSidebar} />
                <div css={container}>
                    <ul css={sidebarLinks}>
                        {
                            navigationLinks.map(({ link, text }, id) => (
                                <li key={id}>
                                    <Link to={link}>
                                        {text}
                                    </Link>
                                </li>
                            )
                            )
                        }
                    </ul>
                </div>
            </div>
            )
        }
    </>
)
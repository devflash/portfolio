import React from 'react';
import { Link } from "gatsby"
import { css } from "@emotion/core"

const navLinks = css`
    height: 100px;
    background-color: #2c3e50;
    ul{
        height: 100%;
        padding: 0 20px;
        margin: 0;
        list-style: none;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    li{
        padding: 0 20px;
        font-size: 20px;
        text-transform: uppercase;
        cursor: pointer;
        a{
            padding-bottom: 5px;
            color: #fff;
            position: relative;
            text-decoration: none;
            &:hover:after{
                width: 100%;
                transition: width 0.5s ease;
            }
            &:after{ 
                content: '';
                display: block;
                margin: auto;
                width: 0;
                height: 3px;
                background-color: #1abc9c;
            }    
        }
    }
    
`;
export default () => (
    <header css={navLinks}>
        <ul>
            <li>
                <Link to="">Portfolio</Link>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
        </ul>
    </header>
)
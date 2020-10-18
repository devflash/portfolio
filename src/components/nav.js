import React, { useState } from 'react';
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { navigationLinks } from '../constants';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from './sidebar';

const navLinks = css`
    height: 100px;
    background-color: #2c3e50;
`;

const desktopLinks = css`
    height: 100%;
    padding: 0 20px;
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
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
     @media screen and (max-width: 768px){
        display: none !important;
    }
`;
const hamburgerMenu = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    @media screen and (min-width: 768px){
        display: none !important;
    }
`;

const menuIcon = css`
    font-size: 50px;
    color: #fff;
    margin-right: 15px;
   
`;


export default () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <header css={navLinks}>
            <ul css={desktopLinks}>
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
            <div css={hamburgerMenu}>
                <GiHamburgerMenu css={menuIcon} onClick={() => setOpen(true)} />
            </div>
            <Sidebar show={isOpen} closeSidebar={() => setOpen(false)} />
        </header>
    )
}
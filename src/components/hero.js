import React from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"
import { HiLocationMarker } from 'react-icons/hi';
import { FaBirthdayCake, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Social from './social';

const heroContainer = css`
    width: 100%;
    height: calc(100vh - 100px);
    background-color: #2ecc71;
    padding-top: 50px;
    @media screen and (max-width: 768px){
        background-color: #fff; 
    }
`;
const heroSubContainer = css`
    width: 90%;
    height: 90%;
    background-color: #fff;
    border-radius: 20px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px){
        flex-direction: column;
        width: 100%;
        height: auto;
        border-radius: 0;
    }
`;

const heroImg = css`
    width: 30%;
    width: 100%;
`;

const heroInfo = css`
    width: 70%;
    padding-left: 40px;
    color: #2c3e50;
    @media screen and (max-width: 768px){
        padding: 10px;
        width: 100%;
    }
`;
const name = css`
    text-transform: uppercase;
    h1{
        margin: 0;
        font-size: 30px;
    }
`;
const personalInfo = css`
    display: flex;
    flex-direction: column;
    color: #95a5a6;
    font-size: 18px;
    div{
        padding-bottom: 20px;
    }
    span{
        padding-left: 5px;
    }
`;

export default () => {
    const { file: { childImageSharp: { fluid } } } = useStaticQuery(query);
    return (
        <div css={heroContainer}>
            <div css={heroSubContainer}>
                <div css={heroImg}>
                    <Img fluid={fluid} style={{ height: "100%", width: "100%", borderRadius: '10px' }}
                        imgStyle={{ objectFit: "cover" }} />
                </div>
                <div css={heroInfo}>
                    <h3>Hello Everyone, I'm</h3>
                    <div css={name}>
                        <h1>Mrugesh</h1>
                        <h1>Wadagbalkar</h1>
                    </div>
                    <h3>Junior Web Developer</h3>
                    <div css={personalInfo}>
                        <div>
                            <FaBirthdayCake />
                            <span>5th March, 1996</span>
                        </div>
                        <div>
                            <MdEmail />
                            <span>mrugeshwadagbalkar@gmail.com</span>
                        </div>
                        <div>
                            <FaPhoneAlt />
                            <span>9082618353</span>
                        </div>
                        <div>
                            <HiLocationMarker />
                            <span>Mumbai</span>
                        </div>
                    </div>
                    <Social />
                </div>
            </div>
        </div>
    )
};


const query = graphql`
  {
    file(relativePath: {eq: "profile.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Marquee = () => {

    const data = useStaticQuery(graphql`
    query  {
        sanityHomePage {
            marqueeText {
                fr
            }
        }
    }
    `)

    
    return (
        <MarqueeContainer>
            <p><span>•</span><span>{data.sanityHomePage.marqueeText.fr}</span><span>•</span><span>{data.sanityHomePage.marqueeText.fr}</span><span>•</span><span>{data.sanityHomePage.marqueeText.fr}</span><span>•</span><span>{data.sanityHomePage.marqueeText.fr}</span><span>•</span><span>{data.sanityHomePage.marqueeText.fr}</span><span>•</span><span>{data.sanityHomePage.marqueeText.fr}</span><span>•</span><span>{data.sanityHomePage.marqueeText.fr}</span><span>•</span><span>{data.sanityHomePage.marqueeText.fr}</span><span>•</span><span>{data.sanityHomePage.marqueeText.fr}</span><span>•</span><span>{data.sanityHomePage.marqueeText.fr}</span></p>
        </MarqueeContainer>
    )
}


const MarqueeContainer = styled.section`
    background-color: var(--yellow);
    overflow: scroll;
    padding: 15px 20px;
    border-bottom: solid 1px black;

    
    p {
      color: var(--black);
      font-family: var(--reg);
      font-size: var(--headline-4);
      white-space: nowrap;
      text-transform: uppercase;
      width: 1000%;
      overflow: hidden;
      animation-name: trnslt;
      animation-iteration-count: infinite;
      animation-duration: 28s;
      animation-timing-function: linear;
      /* animation-direction: alternate; */

      span {
        margin-left: 10px;
        margin-right: 10px;
      }
    }
    @keyframes trnslt {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-25%);
      }
    }
    /* Mobile */
    @media screen and (max-width: 768px) {
      p {
        font-size: var(--headline-3);
        animation-duration: 20s;
      }
    }
  `


export default Marquee
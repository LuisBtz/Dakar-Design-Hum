import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';

const TakeTheNextStep = () => {

const data = useStaticQuery(graphql`
    query  {
        description: sanityTextilesOfSenegal {
            takeBackground {
                asset {
                    gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: DOMINANT_COLOR
                    )
                }
                enAlt
            }
        }
    }
`)

const getDataImage = getImage(data.description.takeBackground.asset);

    return(
        <TakeContainer>
            <GatsbyImage
                style={{ height: "100%", width: "100%" }}
                image={getDataImage}
                alt={data.description.takeBackground.enAlt}
            />
            <TextoRelative>
                <h2>Take the next step</h2>
                <Buttons>
                    <div className='links'>
                            <Link className='first' to='institute-of-design'>VISIT</Link><Link className='second' to='institute-of-design'><img alt='arrow icon' src='./ddh_flecha.svg' /></Link>
                    </div>
                    <div className='links'>
                            <span className='first' >REQUEST INFO</span><span className='second' ><img alt='arrow icon' src='./ddh_flecha.svg' /></span>
                    </div>
                    <div className='links'>
                            <span className='first' >APPLY NOW</span><span className='second' ><img alt='arrow icon' src='./ddh_flecha.svg' /></span>
                    </div>
                </Buttons>
            </TextoRelative>
        </TakeContainer>
    )
}

const TakeContainer = styled.section`
    position: relative;
    height: 400px;
    width: 100%;

    @media (max-width: 780px) {
        height: 450px;
    }
`

const TextoRelative = styled.div`
    position: absolute;
    top: 50px;
    left: 50px;
    width: calc(100% - 100px);
    h2 {
        color: white;
        text-align: center;
    }
`

const Buttons = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    grid-gap: 50px;
    margin-top: 120px;
    .links {
        display: flex;
        width: 70%;
        a, span{
            padding: 10px;
            cursor: pointer;
        }
        .first {
            font-family: var(--reg);
            background-color: var(--yellow);
            width: 80%;
            display: block;
            border: solid 1px black;
        }
        .second {
            font-family: var(--bold);
            background-color: var(--yellow);
            width: 20%;
            display: block;
            border: solid 1px black;
            display: flex;
            justify-content: center;
            img {
                width: 20px;
            }
        }
    }
    @media (max-width: 780px) {
        grid-template-columns: repeat(1, 1fr);
        width: 100%;
        grid-gap: 50px;
        margin-top: 50px;
        margin-bottom: 50px;
    }
`

export default TakeTheNextStep
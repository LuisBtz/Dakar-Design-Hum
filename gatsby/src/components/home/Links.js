import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from 'gatsby';

const Links = () => {

    const data = useStaticQuery(graphql`
    query  {
        sanityHomePage {
            instituteOfDesignImage {
                asset {
                    gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: DOMINANT_COLOR
                    )
                }
                enAlt
            }
            instituteOfDesignText {
                en
            }
            textilesOfSeneglaImage {
                enAlt
                asset {
                    gatsbyImageData(
                    placeholder: DOMINANT_COLOR
                    outputPixelDensities: 1.5
                    layout: FULL_WIDTH
                    )
                }
            }
            textilesOfSeneglaText {
                en
            }
            movilityText {
                en
            }
            movilityImage {
                enAlt
                asset {
                    gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: DOMINANT_COLOR
                    )
                }
            }
            quote {
                en
            }
            quoteFrom {
                en
            }
            studioImage {
                enAlt
                asset {
                    gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: DOMINANT_COLOR
                    )
                }
            }
            studioText {
                en
            }
            manufacturingImage {
                enAlt
                asset {
                    gatsbyImageData(
                    placeholder: DOMINANT_COLOR
                    outputPixelDensities: 1.5
                    layout: FULL_WIDTH
                    )
                }
            }
            manufacturingText {
                en
            }
        }
    }
    `)

const getDataImage1 = getImage(data.sanityHomePage.instituteOfDesignImage.asset);
const getDataImage2 = getImage(data.sanityHomePage.textilesOfSeneglaImage.asset);
const getDataImage3 = getImage(data.sanityHomePage.studioImage.asset);
const getDataImage4 = getImage(data.sanityHomePage.manufacturingImage.asset);
const getDataImage5 = getImage(data.sanityHomePage.movilityImage.asset);

    return (
        <LinksContainer>
            <Institute className='element'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImage1}
                    alt={data.sanityHomePage.instituteOfDesignImage.enAlt}
                />
                <div className='contenido'>
                    <h2 className='headline'>{data.sanityHomePage.instituteOfDesignText.en}</h2>
                    <div className='links'>
                        <Link className='first' to='/institute-of-design'>GO</Link><Link className='second' to='/institute-of-design'><img alt='arrow icon' src='/ddh_flecha.svg' /></Link>
                    </div>
                </div>

            </Institute>
            <Textiles className='element'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImage2}
                    alt={data.sanityHomePage.instituteOfDesignImage.enAlt}
                />
                <div className='contenido'>
                    <h2 className='headline'>{data.sanityHomePage.textilesOfSeneglaText.en}</h2>
                    <div className='links'>
                        <Link className='first' to='/textiles-of-senegal'>GO</Link><Link className='second' to='/textiles-of-senegal'><img alt='arrow icon' src='/ddh_flecha.svg' /></Link>
                    </div>
                </div>
            </Textiles>
            <Movility className='element'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImage5}
                    alt={data.sanityHomePage.movilityImage.enAlt}
                />
                <div className='contenido'>
                    <h2 className='headline'>{data.sanityHomePage.movilityText.en}</h2>
                    <div className='links'>
                        <Link className='first' to='/movility'>GO</Link><Link className='second' to='/movility'><img alt='arrow icon' src='/ddh_flecha.svg' /></Link>
                    </div>
                </div>
            </Movility>
            <School className='element'>
                <div className='quote'>
                    <span>???</span>
                    <h2>{data.sanityHomePage.quote.en}</h2>
                    <p>{data.sanityHomePage.quoteFrom.en}</p>
                </div>
            </School>
            <Studio className='element'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImage3}
                    alt={data.sanityHomePage.instituteOfDesignImage.enAlt}
                />
                <div className='contenido'>
                    <h2 className='headline'>{data.sanityHomePage.studioText.en}</h2>
                    <div className='links'>
                        <Link className='first' to='/studio'>GO</Link><Link className='second' to='/studio'><img alt='arrow icon' src='/ddh_flecha.svg' /></Link>
                    </div>
                </div>
            </Studio>
            <Manufacturing className='element'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImage4}
                    alt={data.sanityHomePage.instituteOfDesignImage.enAlt}
                />
                <div className='contenido'>
                    <h2 className='headline'>{data.sanityHomePage.manufacturingText.en}</h2>
                    <div className='links'>
                        <Link className='first' to='/manufacturing'>GO</Link><Link className='second' to='/manufacturing'><img alt='arrow icon' src='/ddh_flecha.svg' /></Link>
                    </div>
                </div>
            </Manufacturing>
        </LinksContainer>
    )
}

const LinksContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-bottom: solid 1px black;
    .element {
        position: relative;
        .contenido{
            position: absolute;
            top: 0;
            padding: 65px 50px;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            h2 {
                font-family: var(--reg);
                color: white;
                font-size: 2.89vw;
                text-transform: uppercase;
                font-weight: normal;
                font-style: normal;
                letter-spacing: 10px;
            }
            .links {
                display: flex;
                a{
                    padding: 10px 20px;
                    img {
                        width: 20px;
                        align-self: center;
                    }
                }
                .first {
                    font-family: var(--reg);
                    background-color: var(--yellow);
                    width: 80%;
                    display: block;
                    border-left: solid 1px black;
                    border-bottom: solid 1px black;
                    border-top: solid 1px black;
                }
                .second {
                    font-family: var(--bold);
                    background-color: var(--yellow);
                    display: block;
                    border-left: solid 1px black;
                    border-top: solid 1px black;
                    border-right: solid 1px black;
                    border-bottom: solid 1px black;
                    display: flex;
                    justify-content: center;
                }
            }
        }
    }

    @media (max-width: 750px) {
        .links {
            a   {
                padding: 10px !important;
            }
            .second {
                    width: 20%;
                }
        }
    }

    @media (max-width: 780px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);

        h2 {
            font-size: 8vw !important;
        }
    }

`
const Institute = styled.div`
    border-right: solid 1px black;
    @media (max-width: 780px) {
        border-bottom: solid 1px black;
    }
`
const Textiles = styled.div`
    border-right: solid 1px black;
    @media (max-width: 780px) {
        border-bottom: solid 1px black;
    }
`
const Movility = styled.div`

`
const School = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: solid 1px black;
    .quote {
        max-width: 70%;
        align-self: center;
        text-align: center;
        padding-top: 50px;
        padding-bottom: 50px;
        span {
            font-family: var(--bold) !important;
            font-size: 6rem;
            margin-bottom: 20px;
        }
        p {
            margin-top: 50px;
            font-family: var(--reg) !important;
            text-transform: uppercase;
        }
        h2 {
            font-family: var(--bold);
            text-transform: uppercase;
        }
    }
    @media (max-width: 915px) {
        .quote {
            span {
                margin-top: 50px;
                display: block;
                font-size: 3rem;
            }
            h2 {
                font-size: 1.5rem;
            }
            p {
                margin-bottom: 50px;
            }
        }
    }
    @media (max-width: 780px) {
        border-bottom: solid 1px black;
        border-right: none;
    }
`
const Studio = styled.div`
    border-right: solid 1px black;
    @media (max-width: 780px) {
        border-bottom: solid 1px black;
    }
`
const Manufacturing = styled.div`
`

export default Links;
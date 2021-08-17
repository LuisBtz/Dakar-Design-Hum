import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const Projects = () => {

const data = useStaticQuery(graphql`
query  {
    description: sanityManufacturing {
        
        project1Image {
        asset {
            gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
            )
        }
        frAlt
        }
        project1Subtitle {
        fr
        }
        project1Title {
        fr
        }
        project2Image {
        frAlt
        asset {
            gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
            )
        }
        }
        project2Subtitle {
        fr
        }
        project2Title {
        fr
        }
        project3Image {
        asset {
            gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
            )
        }
        frAlt
        }
        project3Subtitle {
        fr
        }
        project3Title {
        fr
        }
        project4Image {
        frAlt
        asset {
            gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
            )
        }
        }
        project4Subtitle {
        fr
        }
        project4Title {
        fr
        }
        project5Image {
        frAlt
        asset {
            gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
            )
        }
        }
        project5Subtitle {
        fr
        }
        project5Title {
        fr
        }
        project6Image {
        frAlt
        asset {
            gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
            )
        }
        }
        project6Subtitle {
        fr
        }
        project6Title {
        fr
        }
        project7Image {
        asset {
            gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
            )
        }
        frAlt
        }
        project7Subtitle {
        fr
        }
        project7Title {
        fr
        }
        project8Image {
        frAlt
        asset {
            gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
            )
        }
        }
        project8Subtitle {
        fr
        }
        project8Title {
        fr
        }
        quote {
        fr
        }
        quoteFrom {
        fr
        }


    }
}
`)



// Project 1
const getDataImage1 = getImage(data.description.project1Image.asset);
const altImage1 = data.description.project1Image.frAlt;
const title1 = data.description.project1Title.fr;
const subtitle1 = data.description.project1Subtitle.fr;

// Project 2
const getDataImage2 = getImage(data.description.project2Image.asset);
const altImage2 = data.description.project2Image.frAlt;
const title2 = data.description.project2Title.fr;
const subtitle2 = data.description.project2Subtitle.fr;

// Project 3
const getDataImage3 = getImage(data.description.project3Image.asset);
const altImage3 = data.description.project3Image.frAlt;
const title3 = data.description.project3Title.fr;
const subtitle3 = data.description.project3Subtitle.fr;

// Project 4
const getDataImage4 = getImage(data.description.project4Image.asset);
const altImage4 = data.description.project4Image.frAlt;
const title4 = data.description.project4Title.fr;
const subtitle4 = data.description.project4Subtitle.fr;

// Project 5
const getDataImage5 = getImage(data.description.project5Image.asset);
const altImage5 = data.description.project5Image.frAlt;
const title5 = data.description.project5Title.fr;
const subtitle5 = data.description.project5Subtitle.fr;

// Project 6
const getDataImage6 = getImage(data.description.project6Image.asset);
const altImage6 = data.description.project6Image.frAlt;
const title6 = data.description.project6Title.fr;
const subtitle6 = data.description.project6Subtitle.fr;

// Project 7
const getDataImage7 = getImage(data.description.project7Image.asset);
const altImage7 = data.description.project7Image.frAlt;
const title7 = data.description.project7Title.fr;
const subtitle7 = data.description.project7Subtitle.fr;

// Project 8
const getDataImage8 = getImage(data.description.project8Image.asset);
const altImage8 = data.description.project8Image.frAlt;
const title8 = data.description.project8Title.fr;
const subtitle8 = data.description.project8Subtitle.fr;

const quote = data.description.quote.fr;
const quoteFrom = data.description.quoteFrom.fr;




    return (
        <ContenedorProjects>

            <div className='project'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImage1}
                    alt={altImage1}
                />
                <div className='info'>
                    <h2>{title1}</h2>
                    <p>{subtitle1}</p>
                </div>
            </div>
            <div className='project'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImage2}
                    alt={altImage2}
                />
                <div className='info'>
                    <h2>{title2}</h2>
                    <p>{subtitle2}</p>
                </div>
            </div>
            <div className='project'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImage3}
                    alt={altImage3}
                />
                <div className='info'>
                    <h2>{title3}</h2>
                    <p>{subtitle3}</p>
                </div>
            </div>
            <div className='project'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImage4}
                    alt={altImage4}
                />
                <div className='info'>
                    <h2>{title4}</h2>
                    <p>{subtitle4}</p>
                </div>
            </div>
            

            <div className='project quote'>
                <div className='content'>
                    <span>“</span>
                    <h2>{quote}</h2>
                    <p>{quoteFrom}</p>
                </div>
            </div>

            <div className='project'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImage5}
                    alt={altImage5}
                />
                <div className='info'>
                    <h2>{title5}</h2>
                    <p>{subtitle5}</p>
                </div>
            </div>
            <div className='project'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImage6}
                    alt={altImage6}
                />
                <div className='info'>
                    <h2>{title6}</h2>
                    <p>{subtitle6}</p>
                </div>
            </div>
            <div className='project'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImage7}
                    alt={altImage7}
                />
                <div className='info'>
                    <h2>{title7}</h2>
                    <p>{subtitle7}</p>
                </div>
            </div>
            <div className='project'>
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={getDataImage8}
                    alt={altImage8}
                />
                <div className='info'>
                    <h2>{title8}</h2>
                    <p>{subtitle8}</p>
                </div>
            </div>

        </ContenedorProjects>
    )
}

const ContenedorProjects = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    .project {
        position: relative; 
        overflow-y: hidden;
        border-bottom: solid 1px black;
        border-right: solid 1px black;
        &:hover {
            .quote {
                opacity: 1;
            }
        }
        .info {
            position: absolute;
            bottom: 50px;
            left: 50px;
            color: white;
            font-family: var(--bold);
        }
    }
    .quote {
        position: relative; 
        overflow-y: hidden;
        border-bottom: solid 1px black;
        border-right: solid 1px black;
        background-color: var(--green);
        color: white;
        padding-top: 50px;
        padding-bottom: 50px;
        .content {
            text-align: center;
            position: relative;
            vertical-align: middle;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            span {
                font-family: var(--bold) !important;
                font-size: 6rem;
                margin-bottom: 0px;
                text-align: center;
            }
            p {
                margin-top: 50px;
                font-family: var(--reg) !important;
                text-transform: uppercase;
                text-align: center;
            }
            h2 {
                margin-top: 0;
                font-family: var(--bold);
                text-transform: uppercase;
                text-align: center;
                width: 70%;
                margin-left: auto;
                margin-right: auto;
            }
        }
    }
    @media (max-width: 780px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export default Projects
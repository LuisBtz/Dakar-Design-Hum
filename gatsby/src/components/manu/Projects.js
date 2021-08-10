import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const Projects = () => {

const data = useStaticQuery(graphql`
query  {
    description: sanityManufacturing {
        projects {
            _key
            projectName {
                en
            }
            studentName {
                en
            }
            quote {
                en
            }
            quoteFrom {
                en
            }
            backgroundImage {
                enAlt
                asset {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        outputPixelDensities: 1.5
                        placeholder: DOMINANT_COLOR
                    )
                }
            }
        }

    }
}
`)


    return (
        <ContenedorProjects>
            {data.description.projects.map(({ projectName, studentName, quote, quoteFrom, backgroundImage, _key }) => {
                const getDataImage = getImage(backgroundImage.asset);
                return (
                    <Project key={_key}>
                        <GatsbyImage
                            style={{ height: "100%", width: "100%" }}
                            image={getDataImage}
                            alt={backgroundImage.enAlt}
                        />
                        <div className='info'>
                            <h2>{projectName.en}</h2>
                            <p>{studentName.en}</p>
                        </div>
                        <div className='quote'>
                            <div className='content'>
                                <span>“</span>
                                <h2>{quote.en}</h2>
                                <p>{quoteFrom.en}</p>
                            </div>
                        </div>
                    </Project>
                )
            })}
        </ContenedorProjects>
    )
}

const ContenedorProjects = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 780px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Project = styled.div`
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
    .quote {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: var(--green);
        color: white;
        opacity: 0;
        transition: opacity 200ms ease-in-out;
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

`

export default Projects
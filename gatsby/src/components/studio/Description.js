import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

const Description = () => {

    const data = useStaticQuery(graphql`
    query  {
        description: sanityStudioPage {
            verticalLogo {
                enAlt
                asset {
                    gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: DOMINANT_COLOR
                    )
                }
            }
            title {
                en
            }
            _rawDescriptionEn
            programDocument {
                en {
                    asset {
                        url
                    }
                }
            }
            aplicationDocument {
                en {
                    asset {
                        url
                    }
                }
            }
            tuitionDocument {
                en {
                    asset {
                        url
                    }
                }
            }
        }
    }
    `)
    
    const getDataImage = getImage(data.description.verticalLogo.asset);

    return (
        <ContainerDescription>
            <div className='first'>
                <div className='logo'>
                <GatsbyImage
                        image={getDataImage}
                        alt={data.description.verticalLogo.enAlt}
                    />
                </div>
            </div>
            <div className='second'>
                <h1>{data.description.title.en}</h1>
                <div className='description'>
                    <BlockContent 
                        blocks={data.description._rawDescriptionEn}
                    />
                </div>
                <div className='downloads'>
                    <div className='program'>
                        <a target='_blank' rel="noreferrer" href={data.description.programDocument.en.asset.url} download>DOWNLOAD PROGRAM</a>
                    </div>
                    <div className='application'>
                        <a target='_blank' rel="noreferrer" href={data.description.aplicationDocument.en.asset.url} download>DOWNLOAD APPLICATION REQUIREMENTS</a>
                    </div>
                    <div className='tuition'>
                        <a target='_blank' rel="noreferrer" href={data.description.tuitionDocument.en.asset.url} download>DOWNLOAD TUITION</a>
                    </div>
                </div>
            </div>
        </ContainerDescription>
    )
}

const ContainerDescription = styled.section`
    display: flex;
    border-bottom: solid 1px black;
    .first {
        width: 30%;
        border-right: solid 1px black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .logo {
            align-self: center;
            width: 80%;
            padding: 50px;
            box-sizing: border-box;
        }
    }
    .second {
        width: 70%;
        h1 {
            padding: 30px;
            border-bottom: solid 1px black;
            font-size: 1.875rem;
            font-weight: normal;
            font-family: var(--roman);
        }
        .description {
            padding: 30px;
            border-bottom: solid 1px black;
            p {
                font-family: var(--roman);
                margin-bottom: 20px;
                display: block;
                strong {
                    font-family: var(--serif);
                }
            }
        }
        .downloads {
            display: flex;
            justify-content: space-between;
            padding: 30px;
            div {
                text-align: center;
                width: 200px;
                align-self: center;
                a {
                    font-family: var(--bold);
                    text-decoration: underline;
                }
            }
        }
    }
@media (max-width: 1100px) {
    .first {
        .logo {
            width: 90%;
        }
    }
}
@media (max-width: 780px) {
    flex-direction: column;
    .first {
        width: 100%;
        border-right: none;
        border-bottom: solid 1px black;
        .logo {
            max-width: 250px;
        }
    }
    .second {
        width: 100%;
        h1 {
            text-align: center;
        }
        .downloads {
            flex-direction: column;
            div {
                width: auto;
                align-self: baseline;
                padding-bottom: 20px;
                a {
                    font-family: var(--bold);
                    text-decoration: underline;
                }
            }
        }
    }
}
`

export default Description
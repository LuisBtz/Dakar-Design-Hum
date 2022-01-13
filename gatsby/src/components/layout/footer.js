import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlockContent from '@sanity/block-content-to-react';

const Footer = () => {

    const data = useStaticQuery(graphql`
    query  {
        sanitySettingsPage {
            logo {
                asset {
                    gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5, placeholder: BLURRED)
                }
                enAlt
            }
            copyright {
                en
            }
            _rawAddressEn
            socialMedia {
                _key
                socialMediaUrl
                icon {
                    enAlt
                    asset {
                        url
                    }
                }
            }
        }
    }
    `)

const getDataImage = getImage(data.sanitySettingsPage.logo.asset);
const altText = data.sanitySettingsPage.logo.enAlt;



    return(
        <FooterContainer>
            <div className='logo'>
                <GatsbyImage
                    image={getDataImage}
                    alt={altText}
                />
            </div>
            <div className='columns'>
                <div className='first'>
                    <p><strong>PROGRAMS</strong></p>
                    <ul>
                        <li><Link  to='/institute-of-design'>INSTITUTE</Link></li>
                        <li><Link to='/textiles-of-senegal'>TEXTILES</Link></li>
                        <li><Link to='/studio'>STUDIO</Link></li>
                        <li><Link to='/manufacturing'>MANUFACTURING</Link></li>
                        <li><Link to='/mobility'>MOBILITY</Link></li>
                    </ul>
                </div>
                <div className='second'>
                    <div className='direction'>
                        <BlockContent 
                            blocks={data.sanitySettingsPage._rawAddressEn}
                        />
                    </div>
                </div>
            </div>
            <div className='bot'>
                <p className='copy'>{data.sanitySettingsPage.copyright.en}</p>
                <div className='follow'>
                    <h4>FOLLOW US</h4>
                    <Social>
                        {data.sanitySettingsPage.socialMedia.map(({ _key, socialMediaUrl, icon }) => {
                        return (
                            <li key={_key}><a target='_blank' rel="noreferrer" href={socialMediaUrl}><img src={icon.asset.url} alt={icon.enAlt} /></a></li>
                        )
                        })}
                    </Social>
                </div>
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
padding: 50px;
position: relative;
z-index: 0;
    .logo {
        width: 300px;
    }
    .columns {
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        .first {
            width: 270px;
            p {
                border-top: solid 1px black;
                border-bottom: solid 1px black;
                strong {
                    display: block;
                    font-family: var(--bold);
                    padding-top: 10px;
                    padding-bottom: 10px;
                }
            }
            ul {
                margin-top: 10px;
                border-bottom: solid 1px black;
                li {
                    margin-bottom: 5px;
                    a {
                        font-family: var(--reg);
                    }
                }
            }
        }
        .second {
            width: 400px;
            .direction {
                p {
                    font-family: var(--reg);
                    width: 250px;
                    margin-bottom: 30px;
                }
            }
        }
    }
    .bot {
        display: flex;
        justify-content: space-between;
        p.copy {
            margin-top: 50px;
            font-family: var(--reg);
        }
        .follow {
            width: 400px;
            h4 {
                font-family: var(--reg);
            }
        }
    }
    @media (max-width: 890px) {
    .columns {
        .second {
            width: auto;
        }
    }
    .bot {
        .follow {
            width: 250px;
        }
    }
}

@media (max-width: 780px) {
    padding-top: 0;
    .logo {
        display: none;
    }
    .columns {
        margin-top: 15px;
        flex-direction: column;
        justify-content: space-between;
        .first {
            width: 100%;
            p {
                border-top: none;
                border-bottom: none;
            }
            ul {
                padding-bottom: 10px;
            }
        }
        .second {
            margin-top: 20px;
            .direction {
                p {
                    margin-bottom: 0px;
                }
            }
        }
    }
    .bot {
        flex-direction: column-reverse;
        .follow {
            margin-top: 30px;
            width: auto;
        }
    }
}
`

const Social = styled.ul`
    display: flex;
    margin-top: 20px;
    li {
        margin-right: 15px;
        img {
            height: 23px;
        }
    }

`

export default Footer;
import { Link, useStaticQuery, graphql } from 'gatsby';
import React, { useState } from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';

const Header = () => {

    const data = useStaticQuery(graphql`
    query  {
        sanitySettingsPage {
            logo {
                asset {
                    gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5, placeholder: BLURRED)
                }
                enAlt
            }
        }
    }
    `)

    const getDataImage = getImage(data.sanitySettingsPage.logo.asset);
    const altText = data.sanitySettingsPage.logo.enAlt;



    const [nav, showNav] = useState(false);

    const toggleVisible = () => {
        showNav(!nav);
      };



    const [lang, showLang] = useState(false);

    const toggleLang = () => {
        showLang(!lang);
      };



      var pathLink = typeof window !== 'undefined' ? window.location.pathname : ''

      const languages = ['en', 'fr']

      






    return (
        <Nav>
            <NavContainerDesktop>
                <Elemento1 className='elemento'>
                    <Link to='/'>
                        <div className='cont'>
                            <GatsbyImage
                                image={getDataImage}
                                alt={altText}
                            />
                        </div>
                    </Link>
                </Elemento1>
                <Elemento2 className='elemento'>
                    <Link 
                    to='/institute-of-design'
                    activeStyle={{
                        backgroundColor: 'var(--blue)',
                        color: 'white',
                        fontFamily: 'var(--bold)'
                    }}
                    >Institute</Link>
                </Elemento2>
                <Elemento3 className='elemento'>
                    <Link 
                    to='/textiles-of-senegal'
                    activeStyle={{
                        backgroundColor: 'var(--yellow)',
                        color: 'white',
                        fontFamily: 'var(--bold)'
                        
                    }}
                    >TEXTILES</Link>
                </Elemento3>
                <Elemento4 className='elemento'>
                    <Link 
                    to='/studio'
                    activeStyle={{
                        backgroundColor: 'var(--red)',
                        color: 'white',
                        fontFamily: 'var(--bold)'
                        
                    }}
                    >STUDIO</Link>
                </Elemento4>
                <Elemento5 className='elemento'>
                    <Link 
                    to='/manufacturing'
                    activeStyle={{
                        backgroundColor: 'var(--green)',
                        color: 'white',
                        fontFamily: 'var(--bold)'
                        
                    }}
                    >MANUFACTURING</Link>
                </Elemento5>
                <Elemento6 className='elemento'>
                    <Link 
                    to='/mobility'
                    activeStyle={{
                        backgroundColor: 'var(--purple)',
                        color: 'white',
                        fontFamily: 'var(--bold)'
                        
                    }}
                    >Mobility</Link>
                </Elemento6>
                <Elemento7 className='elemento'>
                    <ul>
                    {languages.map((lng,) => (
                        <li key={lng}>
                            <Link to={lng === 'en' ? pathLink : '/fr' + pathLink} language={lng} className={lng}>
                            {lng === 'en' ? 'En /' : 'Fr'}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </Elemento7>
            </NavContainerDesktop>


            <NavContainerMobile>
                <div className='nav' >
                    <Ham role="button" aria-label="Close navbar" onClick={toggleVisible}>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </Ham>

                    <LogoNavMob>
                        <div className='contImg'>
                            <Link to='/'>
                                <GatsbyImage
                                    image={getDataImage}
                                    alt={altText}
                                />
                            </Link>
                        </div>
                    </LogoNavMob>

                    <Lang onClick={toggleLang}>
                        <ul>
                            <li><span className='en'>En</span></li>
                            <span>/</span>
                            <li><span className='fr'>Fr</span></li>
                        </ul>
                    </Lang>

                </div>
                <section className={nav ? 'active' : ''}>
                    <nav>
                        <h4>Programs</h4>
                        <ul>
                            <li><Link  to='/institute-of-design' onClick={toggleVisible}>ACADEMY</Link></li>
                            <li><Link to='/textiles-of-senegal' onClick={toggleVisible}>TEXTILES</Link></li>
                            <li><Link to='/studio' onClick={toggleVisible}>STUDIO</Link></li>
                            <li><Link to='/manufacturing' onClick={toggleVisible}>MANUFACTURING</Link></li>
                            <li><Link to='/mobility' onClick={toggleVisible}>MOVILITY</Link></li>
                        </ul>
                    </nav>
                    <button aria-label="Close navbar" className='overlay' onClick={toggleVisible}></button>
                </section>
            </NavContainerMobile>

            <LangPopUp className={lang ? null : 'hide'}>
                <div className='cont'>
                    <h2>Choose your <strong>language</strong></h2>
                    <div className='links'>
                        <div className='link'>
                            <Link onClick={toggleLang} to='/fr/'>French</Link><Link to='/fr/'><img alt='arrow icon' src='/ddh_flecha.svg' /></Link>
                        </div>
                        <div className='link'>
                            <Link onClick={toggleLang} to='/'>English</Link><Link to='/'><img alt='arrow icon' src='/ddh_flecha.svg' /></Link>
                        </div>
                    </div>
                </div>
            </LangPopUp>
        </Nav>
    )
}

export default Header;

const LangPopUp = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 3;
    .cont {
        align-self: center;
        width: 300px;
        background: var(--dark-gray);
        padding: 40px;
        border-radius: 15px;
        h2 {
            text-align: center;
            font-family: var(--roman);
            padding-bottom: 20px;
            border-bottom: solid 1px black;
            strong {
                font-family: var(--serif);
            }
        }
        .links {
            margin-top: 30px;
            .link {
                margin-bottom: 20px;
                display: flex;
                img {
                    width: 20px;
                }
                a {
                    padding: 10px;
                    background: var(--yellow);
                    &:first-child {
                        width: 80%;
                        border-left: solid 1px black;
                        border-top: solid 1px black;
                        border-bottom: solid 1px black;
                    }
                    &:last-child {
                        width: 20%;
                        border-right: solid 1px black;
                        border-left: solid 1px black;
                        border-top: solid 1px black;
                        border-bottom: solid 1px black;
                        display: flex;
                        flex-direction: column;
                        justify-self: center;
                        img {
                            align-self: center;
                        }
                    }
                }
            }
        }
    }
`

const Nav = styled.nav`
`

const NavContainerMobile = styled.div`
    .nav {
        display: grid;
        grid-template-columns: 70px auto 70px;
        border-bottom: solid 1px black;
        height: 70px;
    }
    section nav {
        position: fixed;
        top: 0;
        left: -80%;
        bottom: 0;
        height: 100vh;
        width: 80%;
        background-color: var(--yellow);
        transition: all 350ms ease-in-out;
        z-index: 3;
        padding: 70px 50px;
        font-family: var(--reg);
        text-align: center;
        h4 {
            text-transform: uppercase;
            font-size: 1.125rem;
            font-family: var(--bold);
            border-bottom: solid 1px black;
            padding-bottom: 20px;
        }
        ul li {
            border-bottom: solid 1px black;
        }
        ul li a {
            text-transform: uppercase;
            font-size: 1.125rem;
            display: block;
            margin-bottom: 20px;
            margin-top: 20px;
        }
    }
    section.active nav {
        left: 0;
    }
    section .overlay {
        display: none;
        opacity: 0;
        transition: opacity 350ms ease-in-out;
    }   
    section.active .overlay {
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        height: 100vh;
        width: 100%;
        background-color: black;
        opacity: 0.5;
        cursor: pointer;
        z-index: 2;
    }
    @media (min-width: 670px) {
        display: none;
    }
`

const Ham = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: solid 1px black;
    cursor: pointer;
    .line {
        width: 35px;
        height: 1px;
        background-color: black;
        margin-top: 5px;
        margin-bottom: 5px;
        align-self: center;
    }
`

const LogoNavMob = styled.div`
    border-right: solid 1px black;
    display: flex;
    justify-content: center;
    align-content: center;
    .contImg {
        width: 70%;
        align-self: center;
    }
`

const Lang = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;
    ul {
        display: flex;
        justify-content: center;
        align-self: center;
        span {
            font-size: 0.75rem;
            align-self: baseline;
            align-self: center;
        }
        .en {
            font-family: var(--bold);
        }
        span {
            font-family: var(--reg);
            padding: 0 !important;
            font-size: 1rem;
        }
    }
`


const NavContainerDesktop = styled.ul`
    border-bottom: solid 1px black;
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    height: 70px;
    .elemento {
        text-align: center;
        font-family: var(--reg);
        display: flex;
        justify-content: center;
        height: 100%;
        cursor: pointer;
        a {
            display: block;
            width: 100%;
            height: 100%;
            padding: 0 20px;
            text-transform: uppercase;
            font-size: 0.9rem;
            align-self: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
    @media (max-width: 670px) {
        display: none;
    }
`
const Elemento1 = styled.li`
    grid-column: 1 / 5;
    border-right: solid 1px black;
    display: grid !important;
    grid-template-columns: 1fr;
    padding: 0 !important;
    .cont {
        display: block;
        align-self: center;
        width: 90%;
        height: auto;
    }


`
const Elemento2 = styled.li`
    grid-column: 5/7;
    border-right: solid 1px black;
    &:hover {
        a {
            background-color: var(--blue);
            color: white;
            font-family: var(--bold);
        }
    }
`
const Elemento3 = styled.li`
    grid-column: 7/9;
    border-right: solid 1px black;
    &:hover {
        a {
            background-color: var(--yellow);
            color: white;
            font-family: var(--bold);
        }
    }
`
const Elemento4 = styled.li`
    grid-column: 9/11;
    border-right: solid 1px black;
    &:hover {
        a {
            background-color: var(--red);
            color: white;
            font-family: var(--bold);
        }
    }
`
const Elemento5 = styled.li`
    grid-column: 11/13;
    border-right: solid 1px black;
    &:hover {
        a {
            background-color: var(--green);
            color: white;
            font-family: var(--bold);
        }
    }
`
const Elemento6 = styled.li`
    grid-column: 13/15;
    border-right: solid 1px black;
    &:hover {
        a {
            background-color: var(--purple);
            color: white;
            font-family: var(--bold);
        }
    }
`
const Elemento7 = styled.li`
    grid-column: 15/17;
    align-self: center;
    ul {
        display: flex;
        justify-content: center;
        align-self: center;
        span {
            font-size: 0.75rem;
            align-self: baseline;
        }
        .en {
            font-family: var(--bold);
        }
        a {
            padding-left: 1px !important;
            padding-right: 5px !important;
        }
    }
`
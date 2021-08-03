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
                    >Institute of design</Link>
                </Elemento2>
                <Elemento3 className='elemento'>
                    <Link 
                    to='/textiles-of-senegal'
                    activeStyle={{
                        backgroundColor: 'var(--purple)',
                        color: 'white',
                        fontFamily: 'var(--bold)'
                        
                    }}
                    >TEXTILES OF SENEGAL</Link>
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
                    <ul>
                        <li><Link to='/'  className='en'>En</Link></li>
                        <span>/</span>
                        <li><Link to='/' className='fr'>Fr</Link></li>
                    </ul>
                </Elemento6>
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

                    <Lang>
                        <ul>
                            <li><Link to='/' className='en'>En</Link></li>
                            <span>/</span>
                            <li><Link to='/' className='fr'>Fr</Link></li>
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
                        </ul>
                    </nav>
                    <button aria-label="Close navbar" className='overlay' onClick={toggleVisible}></button>
                </section>
            </NavContainerMobile>
        </Nav>
    )
}

export default Header;

const Nav = styled.nav``

const NavContainerMobile = styled.div`
    .nav {
        height: 70px;
        display: grid;
        grid-template-columns: 70px auto 70px;
        border-bottom: solid 1px black;
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
        a {
            font-family: var(--reg);
            padding: 0 !important;
        }
    }
`


const NavContainerDesktop = styled.ul`
    border-bottom: solid 1px black;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    height: 50px;
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
            font-size: 0.75rem;
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
    grid-column: 1 / 4;
    border-right: solid 1px black;
    display: grid !important;
    grid-template-columns: 1fr;
    padding: 0 !important;
    .cont {
        display: block;
        height: fit-content;
        align-self: center;
        width: 60%;
        margin: 0 auto;
    }
    @media (min-width: 1500px) {
        .cont {
        width: 30%;
    }
    }

`
const Elemento2 = styled.li`
    grid-column: 4/6;
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
    grid-column: 6/8;
    border-right: solid 1px black;
    &:hover {
        a {
            background-color: var(--purple);
            color: white;
            font-family: var(--bold);
        }
    }
`
const Elemento4 = styled.li`
    grid-column: 8/10;
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
    grid-column: 10/12;
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
    grid-column: 12/13;
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
            padding: 0 !important;
        }
    }
`
import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';

const TakeTheNextStep = () => {

const data = useStaticQuery(graphql`
    query  {
        sanityHomePage {
            takeTheNextStepBackgroundImage {
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
`)

const getDataImage = getImage(data.sanityHomePage.takeTheNextStepBackgroundImage.asset);


const [request, showRequest] = useState(false);

    const toggleRequest = () => {
        showRequest(!request);
      };

const [admissions, showAdmission] = useState(false);

    const toggleAdmission = () => {
        showAdmission(!admissions);
      };

    return(
        <TakeContainer>
            <GatsbyImage
                style={{ height: "100%", width: "100%" }}
                image={getDataImage}
                alt={data.sanityHomePage.takeTheNextStepBackgroundImage.enAlt}
            />
            <TextoRelative>
                <h2>Take the next step</h2>
                <Buttons>
                    <div className='links'>
                            <Link className='first' to='institute-of-design'>VISIT</Link><Link className='second' to='institute-of-design'><img alt='arrow icon' src='./ddh_flecha.svg' /></Link>
                    </div>
                    <div className='links' aria-hidden="true" onMouseDown={toggleRequest}>
                            <span className='first' >REQUEST INFO</span><span className='second' ><img alt='arrow icon' src='./ddh_flecha.svg' /></span>
                    </div>
                    <div className='links' aria-hidden="true" onMouseDown={toggleAdmission}>
                            <span className='first' >APPLY NOW</span><span className='second' ><img alt='arrow icon' src='./ddh_flecha.svg' /></span>
                    </div>
                </Buttons>
            </TextoRelative>

            <FormContainerRequest className={request ? null : 'hide' } >
                <div className='contenedor' >
                    <button onMouseDown={toggleRequest} className='close'><span>X</span></button>
                    <h2>Request info</h2>
                    <form name="Request Info" data-netlify="true">
                        <input name='name' type='text' placeholder='Name' />
                        <div className='columns'>
                            <div>
                                <input name='email' type='email' placeholder='Email' />
                            </div>
                            <div>
                                <input name='region' type='text' placeholder='Region' />
                            </div>
                        </div>
                        <label htmlFor='textarea' >Message</label>
                        <textarea id='textarea' name='message' />
                        <button type="submit"><span>Send</span><span><img alt='arrow icon' src='./ddh_flecha.svg' /></span></button>
                    </form>
                </div>
            </FormContainerRequest>


            <FormContainerAdmissions className={admissions ? null : 'hide' } >
                <div className='contenedor' >
                    <button onMouseDown={toggleAdmission} className='close'><span>X</span></button>
                    <h2>Admissions</h2>
                    <form name="Admissions" data-netlify="true">
                        <input name='name' type='text' placeholder='Name' />
                        <div className='columns'>
                            <div>
                                <input name='email' type='email' placeholder='Email' />
                            </div>
                            <div>
                                <input name='region' type='text' placeholder='Region' />
                            </div>
                        </div>
                        <input name='program' type='text' placeholder='Program' />
                        <button type="submit"><span>Send</span><span><img alt='arrow icon' src='./ddh_flecha.svg' /></span></button>
                    </form>
                </div>
            </FormContainerAdmissions>


        </TakeContainer>
    )
}

const TakeContainer = styled.section`
    position: relative;
    height: 400px;
    width: 100%;



    .close {
            position: absolute;
            width: 30px;
            height: 30px;
            top: 20px;
            right: 50px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start ;
            cursor: pointer;
            span {
                align-self: flex-end;
                font-family: var(--reg);
                font-size: 1.5rem;
                line-height: 0.5;
            }
        }

@media (max-width: 780px) {
    height: 450px;
    .close {
            position: absolute;
            width: 30px;
            height: 30px;
            top: 30px;
            right: 20px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start ;
            cursor: pointer;
            span {
                align-self: flex-end;
                font-family: var(--reg);
                line-height: 0.5;
            }
        }
}
`

const TextoRelative = styled.div`
    position: absolute;
    top: 50px;
    left: 50px;
    width: calc(100% - 100px);
    h2 {
        color: white;
    }
    @media (max-width: 780px) {
        h2 {
            color: white;
            text-align: center;
        }
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
        img {
            width: 20px;
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
        }
    }

    @media (max-width: 900px) {
        .links {
            width: 100% !important;
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








const FormContainerRequest = styled.section`
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    .contenedor {
        align-self: center;
        width: 650px;
        padding: 20px 50px 30px;
        background-color: var(--dark-gray);
        border-radius: 10px;
        position: relative;
        z-index: 2;
        h2 {
            font-family: var(--roman);
            text-align: center;
            font-size: 1.6rem;
        }
        form {
            margin-top: 30px;
            input, textarea {
                width: 100%;
                display: block;
                background: none;
                border: none;
                outline: none;
                font-family: var(--reg);
                padding: 10px 0;
                ::placeholder,
                ::-webkit-input-placeholder {
                    color: black;
                }
                :-ms-input-placeholder {
                    color: black;
                }
            }
            input {
                    border-bottom: solid 1px #7D7D7D;
                    margin-bottom: 20px;
                }
            label {
                font-family: var(--reg);
                margin-bottom: 5px;
                display: block;
            }
            textarea {
                border: solid 1px #7D7D7D;
                height: 150px;
            }
            .columns {
                display: flex;
                flex-direction: row;
                width: 100%;
                div {
                    width: 100%;
                    &:first-child {
                        padding-right: 10px;
                    }
                }
            }
            button {
                background: var(--yellow);
                display: flex;
                margin-top: 30px;
                border: solid 1px black;
                position: relative;
                left: 50%;
                transform: translateX(-50%);
                span {
                    img {
                        width: 20px;
                    }
                    display: block;
                    box-sizing: border-box;
                    font-family: var(--reg);
                    &:first-child {
                        border-right: solid 1px black;
                        padding: 10px 150px 10px 10px;
                        text-transform: uppercase;
                    }
                    &:last-child {
                        font-family: var(--bold);
                        padding-left: 10px;
                        padding-right: 10px;
                        align-self: center;
                    }
                }
            }
        }
    }
@media (max-width: 780px) {
    .contenedor {
        width: 450px;
    }
}

@media (max-width: 560px) {
    .contenedor {
        max-width: 350px;
        box-sizing: border-box;
        .columns {
                flex-direction: column !important;
                div {
                    &:first-child {
                        padding-right: 0;
                    }
                }
            }
    }
}
`







const FormContainerAdmissions = styled.section`
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    .contenedor {
        align-self: center;
        width: 650px;
        padding: 20px 50px 30px;
        background-color: var(--dark-gray);
        border-radius: 10px;
        position: relative;
        z-index: 2;
        h2 {
            font-family: var(--roman);
            text-align: center;
            font-size: 1.6rem;
        }
        form {
            margin-top: 30px;
            input, textarea {
                width: 100%;
                display: block;
                background: none;
                border: none;
                outline: none;
                font-family: var(--reg);
                padding: 10px 0;
                ::placeholder,
                ::-webkit-input-placeholder {
                    color: black;
                }
                :-ms-input-placeholder {
                    color: black;
                }
            }
            input {
                    border-bottom: solid 1px #7D7D7D;
                    margin-bottom: 20px;
                }
            label {
                font-family: var(--reg);
                margin-bottom: 5px;
                display: block;
            }
            textarea {
                border: solid 1px #7D7D7D;
                height: 150px;
            }
            .columns {
                display: flex;
                flex-direction: row;
                width: 100%;
                div {
                    width: 100%;
                    &:first-child {
                        padding-right: 10px;
                    }
                }
            }
            button {
                background: var(--yellow);
                display: flex;
                margin-top: 30px;
                border: solid 1px black;
                position: relative;
                left: 50%;
                transform: translateX(-50%);
                span {
                    img {
                        width: 20px;
                    }
                    display: block;
                    box-sizing: border-box;
                    font-family: var(--reg);
                    &:first-child {
                        border-right: solid 1px black;
                        padding: 10px 150px 10px 10px;
                        text-transform: uppercase;
                    }
                    &:last-child {
                        font-family: var(--bold);
                        padding-left: 10px;
                        padding-right: 10px;
                        align-self: center;
                    }
                }
            }
        }
    }
@media (max-width: 780px) {
    .contenedor {
        width: 450px;
    }
}

@media (max-width: 560px) {
    .contenedor {
        max-width: 350px;
        box-sizing: border-box;
        .columns {
                flex-direction: column !important;
                div {
                    &:first-child {
                        padding-right: 0;
                    }
                }
            }
    }
}
`

export default TakeTheNextStep
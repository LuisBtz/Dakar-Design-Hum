import React, { useState } from 'react';
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
                frAlt
            }
        }
    }
`)

const getDataImage = getImage(data.description.takeBackground.asset);



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
                alt={data.description.takeBackground.frAlt}
            />
            <TextoRelative>
                <h2>Passez à l'étape suivante</h2>
                <Buttons>
                    <div className='links'>
                            <Link className='first' to='/fr/institute-of-design'>VISIT</Link><Link className='second' to='/fr/institute-of-design'><img alt='arrow icon' src='/ddh_flecha.svg' /></Link>
                    </div>
                    <div className='links' aria-hidden="true" onMouseDown={toggleRequest}>
                            <span className='first' >DEMANDE D'INFO</span><span className='second' ><img alt='arrow icon' src='/ddh_flecha.svg' /></span>
                    </div>
                    <div className='links' aria-hidden="true" onMouseDown={toggleAdmission}>
                            <span className='first' >APPLIQUER MAINTENANT</span><span className='second' ><img alt='arrow icon' src='/ddh_flecha.svg' /></span>
                    </div>
                </Buttons>
            </TextoRelative>






            <FormContainerRequest className={request ? null : 'hide' } >
                <div className='contenedor' >
                    <button onMouseDown={toggleRequest} className='close'><span>X</span></button>
                    <h2>Demande d'info</h2>
                    <form name="Demande d'info Fr" data-netlify="true">
                        <input name='name' type='text' placeholder='Nom' />
                        <div className='columns'>
                            <div>
                                <input name='email' type='email' placeholder='Email' />
                            </div>
                            <div>
                                <input name='region' type='text' placeholder='Région' />
                            </div>
                        </div>
                        <label htmlFor='textarea' >Un message</label>
                        <textarea id='textarea' name='message' />
                        <button type="submit"><span>Envoyer</span><span><img alt='arrow icon' src='/ddh_flecha.svg' /></span></button>
                    </form>
                </div>
            </FormContainerRequest>


            <FormContainerAdmissions className={admissions ? null : 'hide' } >
                <div className='contenedor' >
                    <button onMouseDown={toggleAdmission} className='close'><span>X</span></button>
                    <h2>Admissions</h2>
                    <form name="Admissions Fr" data-netlify="true">
                        <input name='name' type='text' placeholder='Nom' />
                        <div className='columns'>
                            <div>
                                <input name='email' type='email' placeholder='Email' />
                            </div>
                            <div>
                                <input name='region' type='text' placeholder='Région' />
                            </div>
                        </div>
                        <input name='program' type='text' placeholder='Programme' />
                        <button type="submit"><span>Envoyer</span><span><img alt='arrow icon' src='/ddh_flecha.svg' /></span></button>
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
        text-align: left;
    }

@media (max-width: 780px) {
    h2 {
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
        .first {
            font-family: var(--reg);
            background-color: var(--yellow);
            width: 80%;
            display: block;
            border: solid 1px black;
            align-self: center;
            line-height: 1.2;
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
                        display: flex;
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
                        display: flex;
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
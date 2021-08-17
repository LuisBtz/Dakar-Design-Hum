import React from 'react';
import styled from 'styled-components'

const Admission = () => {

    return (
            <FormContainer className='reqForm' >
                <div className='contenedor' >
                    <h2>Request info</h2>
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
                        <button type="submit"><span>Send</span><span>≥</span></button>
                    </form>
                </div>
            </FormContainer>
    )
}

const FormContainer = styled.section`
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: none;
    flex-direction: column;
    justify-content: center;
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
                    display: block;
                    box-sizing: border-box;
                    font-family: var(--reg);
                    &:first-child {
                        border-right: solid 1px black;
                        padding: 10px 150px 10px 10px;
                        text-transform: uppercase;
                    }
                    &:last-child {
                        padding: 10px 15px;
                        font-family: var(--bold);
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

export default Admission;
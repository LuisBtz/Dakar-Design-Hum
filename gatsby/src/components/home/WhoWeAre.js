import React from 'react'
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';


const WhoWeAre = () => {

    const data = useStaticQuery(graphql`
    query  {
        sanityHomePage {
            whoWeAreTitle {
                en
            }
            whoWeAreText1 {
                en
            }
            whoWeAreText2 {
                en
            }
            whoWeAreDescription {
                en
            }
        }
    }
    `)


    return (
        <WWAContainer>
            <Left>
                <h2>{data.sanityHomePage.whoWeAreTitle.en}</h2>
            </Left>
            <Rigth>
                <h1>{data.sanityHomePage.whoWeAreDescription.en}</h1>
                <Paragraph>
                    <p>{data.sanityHomePage.whoWeAreText1.en}</p>
                    <p>{data.sanityHomePage.whoWeAreText2.en}</p>
                </Paragraph>
            </Rigth>
        </WWAContainer>
    )
}

const WWAContainer = styled.section`
    margin-top: -3px;
    background: var(--yellow);
    display: flex;
    width: 100%;
    padding: 50px;
    border-bottom: solid 1px black;

    @media (max-width: 850px) {
        flex-direction: column;
        h2 {
            margin-bottom: 50px;
        }
    }
    @media (max-width: 650px) {
        padding-bottom: 0;
    }
`

const Left = styled.div`
    width: 30%;
    @media (max-width: 850px) {
        width: 100%;
    }

`
const Rigth = styled.div`
    width: 70%;

    h1 {
        font-size: 1.1875rem;
        margin-bottom: 50px;
    }

    @media (max-width: 850px) {
        width: 100%;
    }
`

const Paragraph = styled.div`
    display: flex;
    justify-content: space-between;
    p {
        font-size: 0.8125rem;
        width: 45%;
    }

    @media (max-width: 650px) {
        flex-direction: column;
        p {
            margin-bottom: 50px;
            padding-bottom: 0;
            width: 100%;
        }
        padding-bottom: 0;
    }
`
export default WhoWeAre;
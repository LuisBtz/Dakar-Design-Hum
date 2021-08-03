import React from 'react'
import styled from 'styled-components';

const WhoWeAre = () => {
    return (
        <WWAContainer>
            <Left>
                <h2>Who We Are</h2>
            </Left>
            <Rigth>
                <h1>We are an interdisciplinary design space that will provide high quality creative design educationto talented individuals who are looking to pursue a career in design.</h1>
                <Paragraph>
                    <p>Dakar serves as one of the most pivotal cities in West Africa in termsof fashion, furniture design, and the arts. Despite its potential to become Africa´s premierdesign city, Dakar remainshighly underserved in quality educational institutions in the designsector. Aspiring design students are often constraint to poor quality trining with little continuity in their professional careers.</p>
                    <p>The DAKAR DESIGN HUB aspires to revolutionize the creative design insdustry in Senegal by galvanizing, organizing and bringing togehter different actors in the creative insdustries. The HUB will offer a number of interconnected programs and services in order to help galvanize Snegal´s creative industries.</p>
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
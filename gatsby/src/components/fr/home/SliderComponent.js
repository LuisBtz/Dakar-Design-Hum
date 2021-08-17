import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";

const SliderComponent = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        fade: true
      };

    const data = useStaticQuery(graphql`
    query  {
        sanityHomePage {
            sliderHome {
                _key
                backgroundImage {
                    asset {
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            outputPixelDensities: 1.5
                            placeholder: DOMINANT_COLOR
                        )
                        id
                    }
                    frAlt
                }
                text {
                    fr
                }
            }
        }
    }
    `)


    return (
        <SliderContainer {...settings}>
            {data.sanityHomePage.sliderHome.map(({ backgroundImage, text, _key}) => {
                    const getDataImage = getImage(backgroundImage.asset);
                return (
                    
                <Slide key={_key}>
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={getDataImage}
                        alt={backgroundImage.frAlt}
                    />
                    <h2>{text.fr}</h2>
                </Slide>
                )
            })}
        </SliderContainer>
    )
}

const SliderContainer = styled(Slider)`

ul.slick-dots {
    position: absolute;
    bottom: 50px;
    li button:before {
        font-size: 10px;
    }
    li button:before {
        color: #FEFEFE;
        opacity: 1;
    }
    li.slick-active button:before {
        color: var(--yellow)
    }
}
`


const Slide = styled.div`
width: 100vw;
height: 90vh;
position: relative;
h2 {
    position: absolute;
    color: var(--white);
    top: 100px;
    left: 50px;
    font-size: 6vw;
    width: 50%;
}

@media (min-width: 1500px) {
    h2 {
      font-size: 4.5vw;
    }
}

@media (max-width: 1100px) {
    h2 {
        top: 50%;
        left: 50px;
        transform: translateY(-50%);
        font-size: 7vw;
        width: 55%;
    }
}

@media (max-width: 650px) {
    h2 {
        font-size: 13vw;
        width: 75%;
    }
}

`

export default SliderComponent;
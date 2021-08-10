import * as React from 'react'
import { graphql } from "gatsby"

import Marquee from "../components/home/Marquee"
import SliderComponent from "../components/home/SliderComponent"
import WhoWeAre from "../components/home/WhoWeAre"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import Links from '../components/home/Links'
import TakeTheNextStep from "../components/home/TakeTheNextStep"
import Newsletter from "../components/home/Newsletter"
import RequestInfo from "../components/layout/RequestInfo"
import Admission from "../components/layout/Admission"

export const data = graphql`
  query  {
    sanityHomePage {
      title
      whoWeAreDescription {
        en
      }
      takeTheNextStepBackgroundImage {
        asset {
          url
        }
      }
    }
  }
`

// markup
const IndexPage = ( {data} ) => {
  return (
    <Layout >
    <Seo title={data.sanityHomePage.title} description={data.sanityHomePage.whoWeAreDescription.en} image={data.sanityHomePage.takeTheNextStepBackgroundImage.asset.url} />
    <Marquee />
    <SliderComponent />
    <WhoWeAre />
    <Links />
    <TakeTheNextStep />
    <Newsletter/>
    <RequestInfo />
    <Admission />
  </Layout>
  )
}


export default IndexPage

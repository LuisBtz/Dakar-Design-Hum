import * as React from 'react'
import { graphql } from "gatsby"

import Marquee from "../../components/fr/home/Marquee"
import SliderComponent from "../../components/fr/home/SliderComponent"
import WhoWeAre from "../../components/fr/home/WhoWeAre"
import Layout from "../../components/fr/layout/layout"
import Seo from "../../components/layout/seo"
import Links from '../../components/fr/home/Links'
import TakeTheNextStep from "../../components/fr/home/TakeTheNextStep"
import Newsletter from "../../components/fr/home/Newsletter"

export const data = graphql`
  query  {
    sanityHomePage {
      title
      whoWeAreDescription {
        fr
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
    <Seo title={data.sanityHomePage.title} description={data.sanityHomePage.whoWeAreDescription.fr} image={data.sanityHomePage.takeTheNextStepBackgroundImage.asset.url} />
    <Marquee />
    <SliderComponent />
    <WhoWeAre />
    <Links />
    <TakeTheNextStep />
    <Newsletter/>
  </Layout>
  )
}


export default IndexPage

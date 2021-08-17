import * as React from 'react'
import { graphql } from "gatsby"

import Layout from "../../components/fr/layout/layout"
import Seo from "../../components/layout/seo"
import Marquee from "../../components/fr/manu/Marquee"
import Description from "../../components/fr/manu/Description"
import Projects from "../../components/fr/manu/Projects"
import TakeTheNextStep from "../../components/fr/manu/TakeTheNextStep"
import Newsletter from "../../components/fr/home/Newsletter"

export const data = graphql`
  query  {
    seo: sanityManufacturing {
      title {
        fr
      }
      marqueeText {
        fr
      }
      takeBackground {
        asset {
          url
        }
      }
    }
  }
`

// markup
const IndexPage = ({data}) => {
  return (
    <Layout >
    <Seo title={data.seo.title.fr} description={data.seo.marqueeText.fr} image={data.seo.takeBackground.asset.url} />
    <Marquee />
    <Description />
    <Projects />
    <TakeTheNextStep />
    <Newsletter />
  </Layout>
  )
}

export default IndexPage

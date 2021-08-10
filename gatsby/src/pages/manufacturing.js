import * as React from 'react'
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import Marquee from "../components/manu/Marquee"
import Description from "../components/manu/Description"
import Projects from "../components/manu/Projects"
import TakeTheNextStep from "../components/manu/TakeTheNextStep"
import Newsletter from "../components/home/Newsletter"

export const data = graphql`
  query  {
    seo: sanityManufacturing {
      title {
        en
      }
      marqueeText {
        en
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
    <Seo title={data.seo.title.en} description={data.seo.marqueeText.en} image={data.seo.takeBackground.asset.url} />
    <Marquee />
    <Description />
    <Projects />
    <TakeTheNextStep />
    <Newsletter />
  </Layout>
  )
}

export default IndexPage

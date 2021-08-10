import * as React from 'react'
import { graphql } from "gatsby"

import Marquee from "../components/studio/Marquee"
import Description from "../components/studio/Description"
import Projects from "../components/studio/Projects"
import TakeTheNextStep from "../components/studio/TakeTheNextStep"
import Newsletter from "../components/home/Newsletter"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"


export const data = graphql`
  query  {
    seo: sanityStudioPage {
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

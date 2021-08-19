import * as React from 'react'
import { graphql } from "gatsby"

import Marquee from "../components/movility/Marquee"
import Description from "../components/movility/Description"
import Projects from "../components/movility/Projects"
import TakeTheNextStep from "../components/movility/TakeTheNextStep"
import Newsletter from "../components/home/Newsletter"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"


export const data = graphql`
  query  {
    seo: sanityMovility {
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
const MobilityPage = ({data}) => {
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

export default MobilityPage

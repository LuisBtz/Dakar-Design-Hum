import * as React from 'react'
import { graphql } from "gatsby"

import Newsletter from "../components/home/Newsletter"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import Description from "../components/tos/Description"
import Marquee from "../components/tos/Marquee"
import Projects from "../components/tos/Projects"
import TakeTheNextStep from "../components/tos/TakeTheNextStep"

export const data = graphql`
  query  {
    seo: sanityTextilesOfSenegal {
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
const TextilesPage = ({data}) => {
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

export default TextilesPage

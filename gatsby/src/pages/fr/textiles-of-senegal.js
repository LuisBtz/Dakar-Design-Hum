import * as React from 'react'
import { graphql } from "gatsby"

import Newsletter from "../../components/fr/home/Newsletter"
import Layout from "../../components/fr/layout/layout"
import Seo from "../../components/layout/seo"
import Description from "../../components/fr/tos/Description"
import Marquee from "../../components/fr/tos/Marquee"
import Projects from "../../components/fr/tos/Projects"
import TakeTheNextStep from "../../components/fr/tos/TakeTheNextStep"

export const data = graphql`
  query  {
    seo: sanityTextilesOfSenegal {
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
const TextilesPage = ({data}) => {
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

export default TextilesPage

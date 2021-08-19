import * as React from 'react'
import { graphql } from "gatsby"

import Newsletter from "../../components/fr/home/Newsletter"
import Layout from "../../components/fr/layout/layout"
import Seo from "../../components/layout/seo"
import Description from "../../components/fr/movility/Description"
import Marquee from "../../components/fr/movility/Marquee"
import Projects from "../../components/fr/movility/Projects"
import TakeTheNextStep from "../../components/fr/movility/TakeTheNextStep"

export const data = graphql`
  query  {
    seo: sanityMovility {
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
const MovilityPage = ({data}) => {
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

export default MovilityPage

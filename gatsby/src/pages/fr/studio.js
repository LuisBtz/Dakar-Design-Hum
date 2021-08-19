import * as React from 'react'
import { graphql } from "gatsby"

import Marquee from "../../components/fr/studio/Marquee"
import Description from "../../components/fr/studio/Description"
import Projects from "../../components/fr/studio/Projects"
import TakeTheNextStep from "../../components/fr/studio/TakeTheNextStep"
import Newsletter from "../../components/fr/home/Newsletter"
import Layout from "../../components/fr/layout/layout"
import Seo from "../../components/layout/seo"


export const data = graphql`
  query  {
    seo: sanityStudioPage {
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
const StudioPage = ({data}) => {
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

export default StudioPage

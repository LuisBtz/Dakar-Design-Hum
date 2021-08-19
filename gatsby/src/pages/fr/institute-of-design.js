import * as React from 'react'
import { graphql } from "gatsby"

import Layout from "../../components/fr/layout/layout"
import Seo from "../../components/layout/seo"
import Description from "../../components/fr/iod/Description"
import Marquee from "../../components/fr/iod/Marquee"
import Projects from "../../components/fr/iod/Projects"
import TakeTheNextStep from "../../components/fr/iod/TakeTheNextStep"
import Newsletter from "../../components/fr/home/Newsletter"



export const data = graphql`
  query  {
    seo: sanityInstituteOfDesign {
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
const InstitutePage = ( {data} ) => {

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

export default InstitutePage

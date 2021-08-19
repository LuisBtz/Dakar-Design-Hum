import * as React from 'react'
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import Description from "../components/iod/Description"
import Marquee from "../components/iod/Marquee"
import Projects from "../components/iod/Projects"
import TakeTheNextStep from "../components/iod/TakeTheNextStep"
import Newsletter from "../components/home/Newsletter"



export const data = graphql`
  query  {
    seo: sanityInstituteOfDesign {
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
const InstitutePage = ( {data} ) => {

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

export default InstitutePage

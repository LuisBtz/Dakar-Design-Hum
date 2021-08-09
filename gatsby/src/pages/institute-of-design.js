import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import Description from "../components/iod/Description"
import Marquee from "../components/iod/Marquee"
import Projects from "../components/iod/Projects"
import TakeTheNextStep from "../components/iod/TakeTheNextStep"

// markup
const IndexPage = () => {

  return (
  <Layout >
    <Seo title='Institute of design' description='Institute of design page' /*image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url}  */ />
    <Marquee />
    <Description />
    <Projects />
    <TakeTheNextStep />
  </Layout>
  )
}

export default IndexPage

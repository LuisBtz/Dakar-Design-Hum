import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"


// markup
const IndexPage = () => {
  return (
    <Layout >
    <Seo title='Institute of design' description='Institute of design page' /*image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url}  */ />
    <h1>Institute of design</h1>
  </Layout>
  )
}

export default IndexPage

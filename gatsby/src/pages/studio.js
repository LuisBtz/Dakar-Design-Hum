import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"


// markup
const IndexPage = () => {
  return (
    <Layout >
    <Seo title='Studio' description='Studio page' /*image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url}  */ />
    <h1>Studio</h1>
  </Layout>
  )
}

export default IndexPage

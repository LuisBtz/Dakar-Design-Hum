import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"


// markup
const IndexPage = () => {
  return (
    <Layout >
    <Seo title='Textiles of senegal' description='Textiles of senegal page' /*image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url}  */ />
    <h1>Textiles of senegal</h1>
  </Layout>
  )
}

export default IndexPage

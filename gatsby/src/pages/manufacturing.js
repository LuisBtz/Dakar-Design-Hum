import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"


// markup
const IndexPage = () => {
  return (
    <Layout >
    <Seo title='Manufacturing' description='Manufacturing page' /*image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url}  */ />
    <h1>Manufacturing</h1>
  </Layout>
  )
}

export default IndexPage

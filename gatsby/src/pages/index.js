import * as React from "react"
import Marquee from "../components/home/Marquee"
import SliderComponent from "../components/home/SliderComponent"
import WhoWeAre from "../components/home/WhoWeAre"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import Links from '../components/home/Links'


// markup
const IndexPage = () => {
  return (
    <Layout >
    <Seo title='Home' description='Home page' /*image={data.sanityHomePage.exhibitionsHF.thumbnailCover.asset.url}  */ />
    <Marquee />
    <SliderComponent />
    <WhoWeAre />
    <Links />
  </Layout>
  )
}




export default IndexPage

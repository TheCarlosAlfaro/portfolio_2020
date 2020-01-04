import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div className="content">
    <Img
      className="headshot"
      fixed={data.file.childImageSharp.fixed}
      alt="headshot"
    />
    <h1>CARLOS ALFARO</h1>
    <p>SOFTWARE DEVELOPER</p>
    <p>Maker</p>
    </div>
  </Layout>
)


export const query = graphql`
query {
  file(relativePath: { eq: "profile-pic.jpg" }) {
    childImageSharp {
      fixed(width: 125, height: 125) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`
export default IndexPage
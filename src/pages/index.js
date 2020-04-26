import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { SocialIcon } from "react-social-icons"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="content">
      <Img
        className="headshot"
        fixed={data.file.childImageSharp.fixed}
        alt="headshot"
      />
      <h1>Hi, I'm Carlos Alfaro 👋.</h1>
      <p>I'm a freelance software developer.</p>
      <div className="social-icons">
        <SocialIcon
          url="https://github.com/carlosalfarodev"
          bgColor="#d1b712"
          style={{ height: 35, width: 35, margin: 2 }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/carlosalfarodev/"
          bgColor="#d1b712"
          style={{ height: 35, width: 35, margin: 2 }}
        />
        <SocialIcon
          url="https://www.instagram.com/carlosalfarodev/"
          bgColor="#d1b712"
          style={{ height: 35, width: 35, margin: 2 }}
        />
        <SocialIcon
          url="https://twitter.com/carlosalfarodev"
          bgColor="#d1b712"
          style={{ height: 35, width: 35, margin: 2 }}
        />
        <SocialIcon
          url="mailto:info@carlosalfaro.me?subject=Carlos Alfaro Inquiry"
          bgColor="#d1b712"
          style={{ height: 35, width: 35, margin: 2 }}
        />
        <SocialIcon
          url="https://www.youtube.com/channel/UC5S3e876wk3AcNz2N5Y1MEA"
          bgColor="#d1b712"
          style={{ height: 35, width: 35, margin: 2 }}
        />
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "profile-pic1.JPG" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export default IndexPage

import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <p>This project build by Gatsby</p>
      <h1>About</h1>      
      <h3>Published on : </h3>
       <p><a href="https://festive-rosalind-d662ed.netlify.app">https://festive-rosalind-d662ed.netlify.app</a></p>         
      <h4>April 2021</h4>      
      <h4>Developer : Homayoun Fakhar</h4>          
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

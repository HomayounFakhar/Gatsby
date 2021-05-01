import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <h1>This project build by Gatsby</h1>
      <h3>Published on : </h3>
       <h3><a href="https://festive-rosalind-d662ed.netlify.app">https://festive-rosalind-d662ed.netlify.app</a></h3>         
      <h3>April 2021</h3>      
      <h3>Developer : Homayoun Fakhar</h3>          
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

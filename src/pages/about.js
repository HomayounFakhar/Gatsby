import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Bio from "../components/bio"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      
      <Link ClassName="" to="/">Go To Home</Link>
      <Seo title="About" />
      
      <h1>About</h1>      
      <Bio/>
      <h3>Published on : </h3>
       <p><a href="https://festive-rosalind-d662ed.netlify.app">https://festive-rosalind-d662ed.netlify.app</a></p>         
      <h4>April 2021</h4>      
      <h4>Developer : Homayoun Fakhar</h4>          
      <p>This project build by Gatsby</p>
      
      
      
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

---
title: Gatsby
date: "2021-05-01T22:10:03.284Z"
description: "Gatsby provides development teams an open source frontend framework for creating rich, optimized websites and a cloud platform for delivering them on a blazing fast edge network."
Reference : https://www.gatsbyjs.com

---

What is **Gatsby** ?

Gatsby enables developers to build fast, secure, and powerful websites using a React-based framework and innovative data layer that makes integrating different content, APIs, and services into one web experience incredibly simple.

How to Install **Gatsby** ?

1. Run the line below in **Terminal** in folder that you want to install gatsby
```js
npm i -g gatsby-cli
```
*Use line below to Make sure that Node is Installed*
```js
node -v 
```
[Install Node](https://nodejs.org/en/download/).

2. To run gatsby as develop mode
```js
gatsby develop
```

How to develop to **Gatsby** ?

1. How to add a page?

Create an new file is called **SamplePage** in src/pages and copy and paste this code
```js
import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const SamplePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <p>Sample Page</p>
    </Layout>
  )
}

export default SamplePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
```

For More information
[https://www.gatsbyjs.com](https://www.gatsbyjs.com).


import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
            website
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author

  return (
    <div className="Introducing">
      <StaticImage
        className="MyPic"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/MyPicHomayoun.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
    
        <p>
          <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <br></br>
          <strong>Interested in programming</strong>
          {` `}
          <a href={author.website}>
            <br></br>
            More information about me on my website         
          </a>

        </p>
   
      )}
         
    </div>
  )
}

export default Bio

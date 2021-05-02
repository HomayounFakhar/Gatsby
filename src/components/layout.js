import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (

      <>
      <h1 >
        <Link to="/">{title}</Link>
      </h1>
 
       <nav>
        <ul ClassName="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>          
        </ul>  
       </nav>

     </>
    )

  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout

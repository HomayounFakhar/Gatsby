import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
     
     <>
       <nav class="menu">
        <div>
          <h1>
            <Link to="/">{title}</Link>
          </h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>          
          </ul>  
        </div>
       </nav>
      </>

    )

  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer className="footer">
        © {new Date().getFullYear()} April Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
        <footer className="my-8 text-center">
          © {new Date().getFullYear()}, Made with ❤️ by
          {` `}
          <a href="https://www.saragibby.com" target="_blank" className="font-semibold hover:cursor-pointer">Lil B's Mom</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

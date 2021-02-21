/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { AiFillHeart } from "react-icons/ai"
import { BiCodeBlock } from "react-icons/bi"
import Sidebar from "../components/Sidebar"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Sidebar />
      
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer className="flex flex-col justify-center py-12 font-mono text-center text-white transition-all duration-300 bg-gray-900 opacity-30 hover:opacity-100 transform-gpu">
          hecho con
          <div className="flex items-center justify-center">
            <BiCodeBlock className="inline-block mx-1 ml-3 text-2xl text-blue-500 " />
            <span className="mx-1 text-2xl text-yellow-400">&</span>
            <AiFillHeart className="inline-block mx-1 mr-3 text-2xl text-red-700 " />
          </div>
          ©{new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { kebabCase } from "lodash"
import Headroom from "react-headroom"
import "./header.css"
import tw from "twin.macro"
import styled from "@emotion/styled"


export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      allSanityPage(filter: { published: { eq: true } }) {
        edges {
          node {
            title
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)
  return (
    <Headroom disableInlineStyles>
    <header className="z-50 ">
      <div className="flex items-center justify-between px-6 py-3 mx-auto text-center max-w-7xl">
        <Link to="/" className="w-40">
          <div className="w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              overflow="visible"
              viewBox="0 0 484.3 241.9"
            >
              <path
                d="M452.5 241.9H31.8A31.8 31.8 0 010 210.1V31.8A31.8 31.8 0 0131.8 0h420.7a31.8 31.8 0 0131.8 31.8V210a31.8 31.8 0 01-31.8 31.8z"
                fill="transparent"
              />
              <path
                fill="#fff"
                d="M103.3 150.6c-5.8 0-10.7-2-14.6-5.8a31.4 31.4 0 01-8.1-15.8V149H53.9v-2.8h9.6V44.8h-9.6v-2.7h26.7v61.6c1.5-6.8 4.2-12 8.1-15.8a20 20 0 0114.6-5.7c5 0 9.8 1.3 14.3 4 4.6 2.8 8.2 6.7 11 11.8 2.9 5 4.3 11.2 4.3 18.3 0 7.1-1.4 13.3-4.2 18.4-2.9 5.1-6.5 9-11 11.8-4.6 2.7-9.4 4-14.4 4zm-4-4.3c3 0 5.6-1.2 7.7-3.4a22 22 0 004.8-10c1-4.5 1.6-10 1.6-16.6 0-6.6-.5-12.1-1.6-16.5-1-4.4-2.7-7.7-4.8-10a10.2 10.2 0 00-7.7-3.3 14 14 0 00-9 3.4 24.6 24.6 0 00-7 10.1 43 43 0 00-2.7 16.3c0 6.4.9 11.9 2.7 16.3 1.8 4.5 4.1 7.9 7 10.2a14 14 0 009 3.5zM198 194.5v-2.8h9.5V129c-1.5 6.7-4.2 12-8 15.8a19.8 19.8 0 01-14.6 5.7c-5 0-9.8-1.4-14.3-4a30.6 30.6 0 01-11-11.8c-2.9-5-4.3-11.2-4.3-18.3 0-7.2 1.4-13.3 4.2-18.4a31 31 0 0111-11.8c4.6-2.7 9.4-4 14.4-4 5.8 0 10.7 1.8 14.5 5.7s6.6 9.1 8.1 15.8V83.5h26.7v2.7h-9.4v105.5h9.4v2.8H198zm-9-48.3c3 0 6-1.1 8.8-3.5 2.9-2.3 5.2-5.6 7-10 1.8-4.5 2.7-10 2.7-16.3s-.9-11.9-2.7-16.4a24.6 24.6 0 00-7-10.2 14 14 0 00-8.9-3.4c-3 0-5.7 1.1-7.8 3.4a21.8 21.8 0 00-4.8 10c-1 4.4-1.5 10-1.5 16.6 0 6.6.5 12 1.5 16.5 1 4.4 2.7 7.7 4.8 10 2.1 2.2 4.7 3.3 7.8 3.3zM252.8 149.1v-2.7h9.6l51.4-60.2h-10.9v-2.7h25.4v2.7h-11L266 146.3h13.5v2.8h-26.6zm41.2 0v-2.7h8.3L263 86.1h-9.2v-2.7h38v2.7h-9l39.6 60.1h7.9v2.8H294zM375.9 83.5v62.8h8.1v2.8h-34.6v-2.7h9.6V86.1h-9.6v-2.7h26.5zm43.5 20v42.8h9.5v2.8h-34.6v-2.8h8.2v-40.9c0-4-.2-7.3-.6-10-.3-2.7-1-4.7-2.1-6-1-1.4-2.7-2-5-2-3.2 0-6 .8-8.3 2.7a22.9 22.9 0 00-5.9 7.4 45.3 45.3 0 00-4.8 19.7l-2 .2a56.2 56.2 0 015.3-22.6c2-3.7 4.5-6.8 7.8-9.1a21 21 0 0112.6-3.6c5.5 0 9.6 1 12.5 2.8a14 14 0 015.8 7.6c1 3.2 1.6 6.9 1.6 11zM258.8 174.3V195h2v.6H248v-.6h3.2v-20H248v-.6h10.7zm13 6.5v14h2v.7h-11.4v-.6h2V181c0-1.2 0-2.2-.2-3 0-.7-.3-1.2-.5-1.5-.3-.4-.6-.5-1-.5-.6 0-1.2.3-1.7.8-.4.5-.9 1.2-1.2 2a21.8 21.8 0 00-1 6.3l-.4.2c0-1.2 0-2.4.2-3.7.2-1.3.5-2.6 1-3.7s1.3-2.1 2.3-2.9c1-.7 2.3-1.1 3.9-1.1 1.5 0 2.7.3 3.6.9.9.6 1.5 1.4 1.9 2.5s.6 2.2.6 3.5zm13.1 0v14h3.2v.7h-12.6v-.6h2V181c0-1.2 0-2.2-.2-3 0-.7-.3-1.2-.5-1.5s-.6-.5-1-.5c-.7 0-1.2.3-1.7.8s-.9 1.2-1.2 2c-.4 1-.6 2-.8 3-.2 1.2-.2 2.3-.2 3.4h-.4c0-1 0-2.3.2-3.6.2-1.3.5-2.6 1-3.7s1.2-2.1 2.2-2.9c1-.7 2.3-1.1 4-1.1 1.5 0 2.7.3 3.5.9 1 .6 1.6 1.4 2 2.5s.6 2.2.6 3.5zM311.8 196c-2.2 0-4.2-.5-5.9-1.3-1.7-.8-3-2-4-3.7-1-1.7-1.6-3.7-1.6-6s.5-4.5 1.5-6.2c1-1.6 2.3-2.8 4-3.7 1.7-.8 3.7-1.2 5.9-1.2 2.3 0 4.2.4 5.7 1.4s2.6 2.1 3.4 3.6a10 10 0 011.2 4.7h-18.6v-.6h10.8a150 150 0 00-.4-5.8c-.1-.8-.4-1.5-.7-2-.4-.4-.8-.7-1.4-.7-.6 0-1.1.3-1.6.8s-.7 1.2-1 2.1l-.4 3.1a48.8 48.8 0 000 8l.7 3.5c.4 1 .9 1.7 1.5 2.3.7.5 1.5.8 2.4.8a8 8 0 005.2-1.7 8.9 8.9 0 003-4.4h.6c-.6 2-1.7 3.6-3.4 5s-4 2-6.9 2zM345.4 196a10 10 0 01-8.3-5c-1-1.8-1.5-3.8-1.5-6 0-2.4.5-4.3 1.4-6 1-1.6 2.2-2.9 3.6-3.8a9 9 0 014.8-1.3c1.9 0 3.5.7 4.7 2 1.2 1.2 2 3 2.5 5.4v-19.7h-3.2v-.6h10.7v33.9h3.1v.6h-10.6v-7c-.4 2.4-1.3 4.2-2.5 5.5a6.3 6.3 0 01-4.7 2zm1.8-1.3c.9 0 1.7-.4 2.5-1.1a8 8 0 002-3.2c.6-1.5.9-3.3.9-5.5s-.3-4-.9-5.4a8 8 0 00-2-3.3c-.8-.7-1.6-1-2.5-1-.7 0-1.3.3-1.7 1-.5.7-.8 1.7-1 3.2a39.6 39.6 0 000 11c.2 1.5.5 2.6 1 3.2.4.7 1 1 1.7 1zM387 174.3V195h3v.6h-13.7v-.6h3.1v-20h-3.1v-.6h10.6zm-3.8-4.9c-1.3 0-2.3-.4-3.2-1.2a4.3 4.3 0 01-1.3-3.2 4.4 4.4 0 014.5-4.4 4.3 4.3 0 014.4 4.4c0 1.3-.4 2.3-1.3 3.2-.8.8-1.9 1.2-3.1 1.2zM409 196a7 7 0 01-4.7-1.6 5.2 5.2 0 01-1.8-4.1c0-2 1-3.7 2.7-4.8a14 14 0 017.6-1.8h5.5v.6H415c-1 0-2 .3-2.6.8-.6.6-1.1 1.3-1.4 2a6.7 6.7 0 00-.2 4.3c.1.5.4 1 .7 1.3.4.3.8.5 1.4.5.5 0 1-.2 1.6-.6.5-.5.9-1.1 1.2-2s.5-2 .5-3.4h.4a11 11 0 01-.9 4.7 6.9 6.9 0 01-2.6 3c-1.1.7-2.5 1-4 1zm12.9 0c-1.1 0-2.1-.2-3-.5-.8-.3-1.5-.7-2-1.3s-.7-1.4-.7-2.3v-10.4c0-1.1-.1-2.2-.4-3.3-.2-1-.6-1.9-1.2-2.6-.7-.7-1.6-1-2.8-1a11.5 11.5 0 00-4.4 1 5 5 0 00-1.8 1.3c-.5.6-.7 1.3-.7 2.1h-.7c0-1 .4-1.9 1.2-2.6.8-.6 1.8-1 3-1 1 0 2 .4 3 1a3 3 0 011.2 2.5c0 1.2-.4 2-1.3 2.7a5 5 0 01-3 1c-1.2 0-2.2-.4-3-1a3.1 3.1 0 01-1.2-2.6c0-1 .3-1.7.8-2.4.5-.6 1.2-1.1 2.1-1.5a11 11 0 012.9-.9c1-.2 2-.2 3.1-.2 2.5 0 4.5.3 6 .9 1.6.6 2.8 1.5 3.5 2.6a7 7 0 011.2 4v11.2c0 .6 0 1 .3 1.3.3.4.7.5 1.2.5.4 0 1-.1 1.5-.4.6-.3 1-.9 1.5-1.6l.4.3c-.5 1-1.3 1.8-2.5 2.3a10 10 0 01-4.2.8z"
              />
              <path
                fill="#fff"
                d="M166.7 192.4V180c0-1.5 1.3-2.7 2.8-2.7h12.4c1.5 0 2.7 1.2 2.7 2.7v12.4c0 1.5-1.2 2.8-2.7 2.8h-12.4a2.7 2.7 0 01-2.8-2.8zM131.7 192.4V180c0-1.5 1.2-2.7 2.7-2.7h13.2c1.5 0 2.7 1.2 2.7 2.7v12.4c0 1.5-1.2 2.8-2.7 2.8h-13.2a2.7 2.7 0 01-2.7-2.8zM97 192.4V180c0-1.5 1.2-2.7 2.7-2.7H113c1.5 0 2.7 1.2 2.7 2.7v12.4c0 1.5-1.2 2.8-2.7 2.8H99.7a2.7 2.7 0 01-2.7-2.8zM59.8 192.4V180c0-1.5 1.2-2.7 2.7-2.7h13.1c1.5 0 2.8 1.2 2.8 2.7v12.4c0 1.5-1.3 2.8-2.8 2.8H62.5a2.7 2.7 0 01-2.8-2.8zM166.7 57.2V44.8c0-1.5 1.3-2.7 2.8-2.7h12.4c1.5 0 2.7 1.2 2.7 2.7v12.4c0 1.5-1.2 2.7-2.7 2.7h-12.4a2.7 2.7 0 01-2.8-2.7zM131.7 57.2V44.8c0-1.5 1.2-2.7 2.7-2.7h13.2c1.5 0 2.7 1.2 2.7 2.7v12.4c0 1.5-1.2 2.7-2.7 2.7h-13.2a2.7 2.7 0 01-2.7-2.7zM97 57.2V44.8c0-1.5 1.2-2.7 2.7-2.7H113c1.5 0 2.7 1.2 2.7 2.7v12.4c0 1.5-1.2 2.7-2.7 2.7H99.7a2.7 2.7 0 01-2.7-2.7zM236.4 57.2V44.8c0-1.5 1.3-2.7 2.8-2.7h12.4c1.5 0 2.7 1.2 2.7 2.7v12.4c0 1.5-1.2 2.7-2.7 2.7h-12.4a2.7 2.7 0 01-2.8-2.7zM201.4 57.2V44.8c0-1.5 1.2-2.7 2.7-2.7h13.2c1.5 0 2.7 1.2 2.7 2.7v12.4c0 1.5-1.2 2.7-2.7 2.7H204a2.7 2.7 0 01-2.7-2.7zM306.1 57.2V44.8c0-1.5 1.2-2.7 2.8-2.7h12.4c1.5 0 2.7 1.2 2.7 2.7v12.4c0 1.5-1.2 2.7-2.7 2.7h-12.4a2.7 2.7 0 01-2.8-2.7zM271.1 57.2V44.8c0-1.5 1.2-2.7 2.7-2.7H287c1.5 0 2.7 1.2 2.7 2.7v12.4c0 1.5-1.2 2.7-2.7 2.7h-13.2a2.7 2.7 0 01-2.7-2.7zM375.8 57.2V44.8c0-1.5 1.2-2.7 2.8-2.7H391c1.5 0 2.7 1.2 2.7 2.7v12.4c0 1.5-1.2 2.7-2.7 2.7h-12.4a2.7 2.7 0 01-2.8-2.7zM340.8 57.2V44.8c0-1.5 1.2-2.7 2.7-2.7h13.2c1.5 0 2.7 1.2 2.7 2.7v12.4c0 1.5-1.2 2.7-2.7 2.7h-13.2a2.7 2.7 0 01-2.7-2.7z"
              />
              <path
                fill="#fff"
                d="M375.8 57.2V44.8c0-1.5 1.2-2.7 2.8-2.7H391c1.5 0 2.7 1.2 2.7 2.7v12.4c0 1.5-1.2 2.7-2.7 2.7h-12.4a2.7 2.7 0 01-2.8-2.7zM410.5 57.2V44.8c0-1.5 1.2-2.7 2.7-2.7h13.2c1.5 0 2.7 1.2 2.7 2.7v12.4c0 1.5-1.2 2.7-2.7 2.7h-13.2a2.7 2.7 0 01-2.7-2.7z"
              />
            </svg>
          </div>
        </Link>
        <nav className="items-center justify-center hidden md:flex ">
          <Link
            to={`/blog`}
            partiallyActive={true}
            activeClassName="opacity-50"
            className="mx-6 font-serif text-sm font-bold text-gray-100 lg:text-base"
          >
            Video Blog
          </Link>
          <Link
            to={`/boqueixon`}
            partiallyActive={true}
            activeClassName="opacity-50"
            className="mx-6 font-serif text-sm font-bold text-gray-100 lg:text-base"
          >
            Boqueixon
          </Link>
          {data.allSanityPage.edges.map(({ node }) => {
            return (
              <Link
                key={node.id}
                to={`/${kebabCase(node.slug.current)}`}
                partiallyActive={true}
                activeClassName="opacity-50"
                className="mx-8 font-serif text-sm font-bold text-gray-100 lg:text-base"
              >
                {node.title}
              </Link>
            )
          })}
        </nav>
        <a
          href="https://www.youtube.com/channel/UC2ACyQNkcbXOWaiI59DxEeQ"
          className="hidden w-8 h-8 pt-1 ml-4 mr-6 duration-500 transform md:block hover:opacity-80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="text-white fill-current"
          >
            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
          </svg>
        </a>
      </div>
    </header>
    </Headroom>
  )
}
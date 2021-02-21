import React from "react"
import { graphql } from "gatsby"

export const SanityCompomentsPlugsFragment = graphql`
  fragment PlugComponents on SanityPage {
    id
    title
    content {
      ... on SanityQuote {
        _key
        _type
        label
        title
        body
      }
      ... on SanityHero {
        _key
        _type
        heading 
        tagline
        featuredImage {
          asset {
            fluid(maxWidth: 2000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      
    }
  }
`

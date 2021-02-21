//import { Link, FormattedMessage } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Img from "gatsby-image"
import React from "react"
import { kebabCase } from "lodash"
import tw from "twin.macro"
import styled from "@emotion/styled"

export const query = graphql`
  query($slug: String) {
    sanityCategory(slug: { current: { eq: $slug } }) {
      title
      image {
        asset {
          url
          fluid(maxWidth: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
      description
    }
    allSanityPost(
      filter: {
        categories: { elemMatch: { slug: { current: { eq: $slug } } } }
      }
      sort: { order: DESC, fields: publishedAt }
    ) {
      edges {
        node {
          title
          excerpt
          categories {
            title
            slug {
              current
            }
            _id
          }
          mainImage {
            asset {
              fluid(maxWidth: 500) {
                ...GatsbySanityImageFluid
              }
            }
          }
          publishedAt(locale: "es", formatString: "LL")
          slug {
            current
          }
        }
      }
    }
  }
`

const CategoriesTemplatePage = ({ data }) => (
  <Layout>
    <SEO
      title={data.sanityCategory.title}
      image={data.sanityCategory.image.asset.url}
    />

    <div className="flex flex-col mt-24 ">
      <div className="mb-6 bg-blue-600">
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl px-6 pt-12 mx-auto mb-6 text-center md:mb-0 md:py-12 md:px-2">
          <Link
            to="/blog"
            className="inline-block mb-6 font-serif text-white border-b-2 border-gray-100"
          >
            Volver blog
          </Link>
          <h1 className="font-serif text-4xl text-white">
            {data.sanityCategory.title}
          </h1>
          <div className="block mt-2 font-serif text-lg text-center text-white ">
            {data.sanityCategory.description && (
              <>{data.sanityCategory.description}</>
            )}
          </div>
        </div>
      </div>
      <Section>
        <div className="grid w-full gap-4 px-6 mx-auto max-w-7xl sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {data.allSanityPost.edges.map(({ node: article }) => (
            <div
              to={`/blog/${kebabCase(article.slug.current)}`}
              className="relative flex flex-col items-start justify-start overflow-hidden transition-all duration-700 ease-in-out transform bg-gray-800 rounded-xl blog-item"
            >
              <Link
                to={`/blog/${kebabCase(article.slug.current)}`}
                className="w-full h-56 overflow-hidden shadow-xl opacity-90"
              >
                {article.mainImage && (
                  <Img
                    fluid={article.mainImage.asset.fluid}
                    className="object-cover w-full h-56"
                  />
                )}
              </Link>
              <div className="relative z-50 w-full px-6 mt-5">
                <Link
                  to={`/blog/${kebabCase(article.slug.current)}`}
                  className="pr-6 mt-4 font-serif text-base font-bold tracking-wider text-left text-white transition-all duration-500 unerline transform-gpu md:text-xl hover:opacity-70"
                >
                  {article.title}
                </Link>
                <p className="mt-3 text-base text-white">{article.excerpt}</p>
                <time className="block mb-5 mr-3 italic text-white opacity-80">
                  {article.publishedAt}
                </time>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  </Layout>
)

export default CategoriesTemplatePage

const Section = styled.section`
  ${tw`relative w-full max-w-6xl mx-auto overflow-y-auto`}

  .blog-item {
    img {
      transition: all 700ms !important;
      transform: scale(1) !important;
    }

    &:hover {
      img {
        transform: scale(1.05) !important;
      }
    }
  }
`

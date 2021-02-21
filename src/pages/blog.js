import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { kebabCase } from "lodash"
import { Link } from "gatsby"
import tw from "twin.macro"
import styled from "@emotion/styled"
import Img from "gatsby-image"

export const query = graphql`
  {
    allSanityPost(sort: { order: DESC, fields: publishedAt }) {
      edges {
        node {
          title
          excerpt
          mainImage {
            asset {
              fluid(maxWidth: 500) {
                ...GatsbySanityImageFluid
              }
            }
          }
          categories {
            title
            slug {
              current
            }
            _id
          }
          publishedAt(locale: "es", formatString: "LL")
          _createdAt(locale: "es", formatString: "LL")
          slug {
            current
          }
        }
      }
    }
    allSanityCategory {
      edges {
        node {
          id
          title
          description
          slug {
            current
          }
        }
      }
    }
  }
`

const BlogPage = ({ data, pageContext, location }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="">
        <div className="w-full px-6 py-20 pb-12 mb-6 bg-blue-900 ">
          <div className="max-w-6xl mx-auto">
            <h1 className="mt-12 mb-2 font-serif text-4xl text-center text-gray-100">
              Video Blog
            </h1>
            <div className="flex flex-wrap justify-center w-full mt-6">
              {data.allSanityCategory.edges.map(({ node: article }) => (
                <div key={article.id} className="mb-6 ">
                  <Link
                    to={`/blog/categoria/${kebabCase(article.slug.current)}`}
                    className="px-4 py-2 mr-2 font-serif text-sm font-bold text-gray-100 uppercase transition-all duration-300 bg-gray-800 rounded-lg transform-gpu md:text-base hover:bg-gray-700"
                  >
                    {article.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Section className="">
          <div className="grid w-full gap-4 px-6 mx-auto max-w-7xl sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {data.allSanityPost.edges.map(({ node: post }) => (
              <div
                to={`/blog/${kebabCase(post.slug.current)}`}
                key={post.slug.current}
                className="relative flex flex-col items-start justify-start overflow-hidden transition-all duration-700 ease-in-out transform bg-gray-800 border border-gray-800 rounded-xl blog-item"
              >
                <Link
                  className="w-full h-56 overflow-hidden shadow-xl opacity-50"
                  to={`/blog/${kebabCase(post.slug.current)}`}
                >
                  {post.mainImage && (
                    <Img
                      fluid={post.mainImage.asset.fluid}
                      className="object-cover w-full h-56"
                    />
                  )}
                </Link>
                <Link
                  to={`/blog/${kebabCase(post.slug.current)}`}
                  className="absolute top-0 left-0 px-6 mt-6 font-serif text-base font-bold text-left text-white no-underline transition-all duration-500 md:pr-2 transform-gpu md:text-2xl hover:opacity-70"
                >
                  {post.title}
                </Link>
                <div className="relative z-50 w-full py-4 -mt-16">
                  <div className="flex flex-col items-start justify-start mt-4 mb-3 transition-all duration-500 bg-gray-900 opacity-90 hover:opacity-100 transform-gpu">
                    {post.categories.map(({ title, slug, _id }) => (
                      <Link
                        key={_id}
                        className="inline-block px-6 mt-2 mb-1 font-serif font-bold text-left text-white uppercase text-lx hover:text-gray-300"
                        to={`/blog/categoria/${kebabCase(slug.current)}`}
                      >
                        {title}
                      </Link>
                    ))}
                    <time className="absolute top-0 right-0 mt-2 mr-3 italic text-white opacity-80">
                      {post.publishedAt}
                    </time>
                  </div>

                  <p className="px-6 mt-6 text-xl text-gray-100 ">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </Layout>
  )
}

export default BlogPage

const Section = styled.section`
  ${tw`flex flex-col w-full mx-auto`}

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

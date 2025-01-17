import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PortableText from "../components/portableText"
import { Link } from "gatsby"
import getYouTubeId from "get-youtube-id"
import YouTube from "react-youtube"
import ReactPlayer from 'react-player'
import SEO from "../components/seo"
//import Img from "gatsby-image"
import "./post.css"
import { kebabCase } from "lodash"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { GrTextAlignFull } from "react-icons/gr";

export const query = graphql`
  query($slug: String) {
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      excerpt
      youtubeurl
      _rawArticle(resolveReferences: { maxDepth: 10 })
      categories {
        title
        slug {
          current
        }
        _id
      }
      mainImage {
        asset {
          url
          fluid(maxWidth: 1900) {
            ...GatsbySanityImageFluid
          }
        }
      }
      slug {
        current
      }
      publishedAt(locale: "es", formatString: "LL")
    }
  }
`

const PostTemplatePage = ({ data, pageContext, location }) => {
  const { prev, next } = pageContext
  var id = getYouTubeId(data.sanityPost.youtubeurl)

  return (
    <Layout>
      <SEO
        title={data.sanityPost.title}
        image={data.sanityPost.mainImage.asset.url}
      />
      <div className="bg-black ">
        {data.sanityPost.youtubeurl && (
          <div className="max-w-3xl py-24 pb-3 mx-auto ">
            <div className="border-b-2 border-gray-800 youtubeContainer">
              <ReactPlayer controls="true" width="100%" height="400px" url={data.sanityPost.youtubeurl} />
            </div>
          </div>
        )}
        <div className="flex items-center justify-between max-w-3xl pb-6 mx-auto">
          <AnchorLink
            className="z-50 flex items-center justify-between font-mono text-xl text-white border-b border-gray-100 hover:text-gray-500"
            href="#articulo"
          >
            <GrTextAlignFull className="mr-2 text-base" />
            Ver reseña
          </AnchorLink>
          
          <time className="px-4 py-1 ml-2 font-mono text-sm text-gray-900 bg-white">
            Públicado el {data.sanityPost.publishedAt}
          </time>
        </div>
      </div>

      <div className="relative z-20 max-w-2xl px-6 mx-auto text-white ">
        <div className="flex flex-col items-center justify-between mb-6 ">
        <Link
            to="/blog"
            className="flex my-6 text-white uppercase hover:opacity-80 hover:border-white"
          >
            {data.sanityPost.categories && (
              <div className="">
                {data.sanityPost.categories.map(({ title, slug, _id }) => (
                  <Link
                    key={_id}
                    className="inline-block mx-2 border-b-2 border-white"
                    to={`/blog/categoria/${kebabCase(slug.current)}`}
                  >
                    {title}
                  </Link>
                ))}
              </div>
            )}
          </Link>
        </div>

        <h1  id="articulo" className="my-3 mb-12 font-serif text-5xl tracking-wider text-left text-white ">
          {data.sanityPost.title}
        </h1>

        <article
         
          className="px-0 pb-12 mt-6 text-xl text-justify text-white break-words md:px-0 letter-light "
        >
          {data.sanityPost._rawArticle && (
            <PortableText blocks={data.sanityPost._rawArticle} />
          )}
        </article>
      </div>
      <nav className="flex justify-between w-full max-w-6xl p-2 mx-auto bg-gray-900">
        <div className="flex-1 py-6 text-center bg-gray-700 border-r border-gray-300 hover:bg-gray-800">
          {prev && (
            <Link
              to={`/blog/${kebabCase(prev.slug.current)}`}
              rel="prev"
              className="text-xl font-bold text-white transition-all duration-200 transform hover:translate-x-2"
            >
              ← {prev.title}
            </Link>
          )}
        </div>
        <div
          className="flex-1 py-6 text-center bg-gray-50 hover:bg-gray-100 "
          style={{ justifySelf: "flex-end" }}
        >
          {next && (
            <Link
              to={`/blog/${kebabCase(next.slug.current)}`}
              rel="next"
              className="text-xl font-bold transition-all duration-200 transform hover:-translate-x-2"
            >
              {next.title} →
            </Link>
          )}
        </div>
      </nav>
    </Layout>
  )
}

export default PostTemplatePage

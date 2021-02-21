import React from "react"
//import ReactPlayer from "react-player"
import getYouTubeId from "get-youtube-id"
import YouTube from "react-youtube"
import ReactPlayer from 'react-player'
import { kebabCase } from "lodash"
import { Link } from "gatsby"

const QuoteReference = ({ node }) => {
  if (node && node.label && node.title) {
    return (
      <div className="px-2 py-1 mx-1 text-white bg-red-500">
        <div className="bg-blue-500">{node.label}</div>
        <div className="bg-red-500">{node.title.es}</div>
      </div>
    )
  }
  return <></>
}

const AuthorReference = ({ node }) => {
  if (node && node.author && node.author.name) {
    return (
      <span className="px-2 py-1 mx-1 text-white bg-gray-700">
        {node.author.name}
      </span>
    )
  }
  return <></>
}

const CoursesReference = ({ node }) => {
  if (node && node.courses && node.courses.title.es) {
    return (
      <div className="py-12 font-serif text-2xl text-center no-underline bg-white">
        <Link to={`/cursos/${kebabCase(node.courses.slug.current)}`}>
          Solicitar {node.courses.title.es}
        </Link>
      </div>
    )
  }
  return <></>
}

const serializers = {
  types: {
    authorReference: AuthorReference,
    coursesReference: CoursesReference,
    quote: QuoteReference,

    youtube: ({ node }) => {
      const { url } = node
      const id = getYouTubeId(url)
      return <ReactPlayer controls="true" width="100%" height="400px" url={url} />
    },
  },

  marks: {
    internalLink: ({ mark, children }) => {
      const href = `/${mark.reference._type}/${mark.reference.slug.current}`
      return (
        <Link className="underline" to={href}>
          {children}
        </Link>
      )
    },

    link: ({ mark, children }) => {
      const { blank, href } = mark
      return blank ? (
        <a href={href} className="text-indigo-400 underline" target="_blank" rel="noreferrer">
          {children}
        </a>
      ) : (
        <a className="text-white underline" href={href}>
          {children}
        </a>
      )
    },
  },
}

export default serializers

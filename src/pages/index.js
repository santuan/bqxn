import React from "react"
//import { Link } from "gatsby"
//import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
//import YouTube from "react-youtube"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="relative flex flex-col items-center justify-center pt-24 bg-black">
        <video
          muted
          loop
          controls
          controlsList="nodownload "
          disablePictureInPicture
          autoPlay="autoplay"
          className="opacity-90"
        >
          <source
            src="https://videos.ctfassets.net/e99fpapc95u3/2lLTdJKc8CNPj57d1fCnMf/e3a4f1769586f9cd3546749c85ce88b3/bqxn-intro.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </Layout>
  )
}

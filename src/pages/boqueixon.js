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
      <div className="mx-auto mt-24 bg-gray-900 opacity-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d498.3340043515376!2d-8.446762505004115!3d42.807018789473624!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2faa498880ced9%3A0x9fb4d8d9b3da173e!2sPico%20Sacro!5e1!3m2!1sen!2sar!4v1613878183917!5m2!1sen!2sar"
          width="100%"
          height="650"
          className="mb-0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </Layout>
  )
}

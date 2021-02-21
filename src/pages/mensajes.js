import Quote from "../components/quote"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import React from "react"
import Hero from "../components/hero"

export const query = graphql`
  {
    route: sanityPage(title: { eq: "Mensajes" }) {
      ...PlugComponents
    }
  }
`
const ThirdPage = props => {
  const { data, errors } = props

  if (errors) {
    return <Layout>error</Layout>
  }

  const page = data.page || data.route

  const content = (page.content || [])
    .filter(c => !c.disabled)
    .map((c, i) => {
      let el = null
      switch (c._type) {
        case "quote":
          el = <Quote key={c._key} {...c} />
          break
        case "hero":
          el = <Hero key={c._key} {...c} cta="courses" />
          break

        default:
          el = null
      }
      return el
    })

  return (
    <Layout>
      <div className="bg-red-500">{content}</div>
     
    </Layout>
  )
}
export default ThirdPage

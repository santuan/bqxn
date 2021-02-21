import React from "react"
//import clientConfig from "../../client-config"
import BasePortableText from "@sanity/block-content-to-react"
import serializers from "./serializers"

const PortableText = ({ blocks }) => (
  <BasePortableText
    blocks={blocks}
    serializers={serializers}
    projectId="hgp6ntw9"
    imageOptions={{ w: 1200, fit: "fill" }}
    dataset="production"
  />
)

export default PortableText

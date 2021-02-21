import React from "react"
import PortableText from "../components/portableText"
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"

function InfoRow(props) {
  return (
    <section
      key={props._key}
      className="relative pt-12 pb-24 mx-auto bg-blue-800 "
    >
      <div className="flex flex-col items-center justify-center max-w-2xl px-4 py-12 mx-auto space-y-2 text-center bg-gray-700 shadow-2xl sm:px-6 lg:px-8">
        <ImQuotesLeft className="text-gray-100" />
        <div className="hidden pt-2 font-serif text-2xl font-black text-gray-100 uppercase">
          {props.label}
        </div>
        <div className="font-serif text-xl text-center text-gray-100 capitalize">
          {props.title}
        </div>
        <div className="max-w-xl mx-auto mt-2 font-serif text-base leading-loose text-gray-100">
          {props._rawBody && <PortableText blocks={props._rawBody} />}
        </div>
        <ImQuotesRight className="text-gray-100" />
      </div>
    </section>
  )
}

export default InfoRow

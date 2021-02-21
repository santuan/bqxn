import { Link } from "gatsby"
import React from "react"

const routes = [
  {
    title: "Inicio",
    slug: "/",
  },
  {
    title: "Video blog",
    slug: "/blog",
  },
  {
    title: "Boqueixon",
    slug: "/boqueixon",
  },
  {
    title: "Mensajes",
    slug: "/mensajes",
  },
]

const Navigation = ({ closeMenu }) => (
  <nav className="flex flex-col w-full">
    {routes.map((route, i) => {
      return (
        <Link
          key={i}
          onClick={closeMenu}
          to={route.slug}
          partiallyActive={true}
          activeClassName="opacity-50"
          className={`hover:${route.active} my-3 font-mono text-xl text-gray-800 text-right cursor-pointer`}
        >
          {route.title}
        </Link>
      )
    })}
    <a
      href="https://www.youtube.com/channel/UC2ACyQNkcbXOWaiI59DxEeQ"
      className="flex justify-end my-3 font-mono text-xl text-right text-gray-800 duration-500 transform cursor-pointer hover:opacity-80"
    >
      Youtube

      <div className="block mt-1 ml-2 w-7 h-7 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="text-red-500 fill-current"
        >
          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
        </svg>
      </div>
    </a>
  </nav>
)

export default Navigation

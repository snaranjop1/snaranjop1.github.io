import React from "react"
import twitter from "../images/twitter.png"
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <div className="flex h-16 justify-between font-medium bg-black text-white gnrl-padding sticky top-0 z-10">
      <Link className="flex items-center" to="/">
        <div>Sergio Naranjo</div>
      </Link>
      <ul className="flex flex-row items-center invisible md:visible w-0 md:w-auto">
        <li className="px-3 opacity-70 hover:opacity-100">
          <Link to="/#work">Work</Link>
        </li>
        <li className="px-3 opacity-70 hover:opacity-100">
          <Link to="/#about">About Me</Link>
        </li>
        <li className="px-3 opacity-70 hover:opacity-100">
          <Link to="/#contact">Contact</Link>
        </li>
      </ul>
      <ul className="flex flex-row items-center">
        <li className="opacity-30 hover:opacity-100">
          <a href="https://twitter.com/snaranjop1">
            <img src={twitter} className="h-5" alt="twitter-logo" />
          </a>
        </li>
        <li className="opacity-30 hover:opacity-100">
          <a href="https://www.linkedin.com/in/sergio-naranjo-puentes-78a457176/">
            <img src={linkedin} className="h-5 px-4" alt="linkedin-logo" />
          </a>
        </li>
        <li className="opacity-30 hover:opacity-100">
          <a href="https://github.com/snaranjop1">
            <img src={github} className="h-5" alt="github-logo" />
          </a>
        </li>
      </ul>
    </div>
  )
}

import { Link } from "gatsby"
import React from "react"

export default function Footer() {
  return (
    <div className="pt-20 text-white bg-black gnrl-padding" id="contact">
      <div>
        <h3 className="font-bold text-2xl">Let's talk</h3>
        <p className="font-regular text-md py-3 opacity-75">
          Got a project that you want to talk about? Want to discuss a
          side-project? Have any job offer for me? Feel free to drop me an email
          here:
        </p>
        <p className="font-medium text-lg">sergionaranjopuentes@gmail.com</p>
      </div>
      <div className="bg-white bg-opacity-20 h-px w-full my-10"></div>
      <p className="font-light text-sm opacity-75 pb-10">
        Designed & Developed by{" "}
        <Link className="font-bold opacity-100 hover:text-orange" to="/">
          Sergio Naranjo{" "}
        </Link>
        in Colombia.
      </p>
    </div>
  )
}

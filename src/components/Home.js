import { Link } from "gatsby"
import React from "react"

export default function Home(props) {
  return (
    <div className="py-16 md:py-24 2xl:py-32 bg-black text-white gnrl-padding">
      <h1 className="mb-9 font-black text-6xl md:text-9xl uppercase leading-extra-loose">
        Software
        <br />
        Engineer
      </h1>
      <p className="font-light text-gray text-xl w-full xl:w-7/12">
        I’m Sergio Naranjo – a Software Engineer from Colombia. I specialize in
        building (and occasionally designing) exceptional web digital
        experiences. Currently, I'm trying to combine comedy and web development
        with{" "}
        <a
          className="text-white border-solid border-b-2 border-orange hover:bg-orange transition-colors"
          href={props.mainProjectUrl}
        >
          <span>StpidBits</span>
        </a>
        . Furthermore, I like to build top quality software, beautiful UI’s and
        have fun in the process.
      </p>
      <p className="py-6 font-light text-gray text-xl w-full xl:w-7/12">
        Already interested? Check my work and{" "}
        <Link
          className="text-white border-solid border-b-2 border-orange hover:bg-orange transition-colors"
          to="/#contact"
        >
          <span>get in touch!</span>
        </Link>
      </p>
      <a
        href="https://drive.google.com/file/d/1rJLfT9BpraVOwCzYMaIol3JhtDJ1EOH7/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <button className="text-white mt-4 text-xl font-medium p-5 text-center border-solid bg-orange rounded-lg w-full xl:w-2/5">
          Check My Resume
        </button>
      </a>
    </div>
  )
}

import React from "react"
import arrow from "../images/arrow-right.svg"

export default function ProjectCard(props) {
  return (
    <div className="flex-col">
      <a href={props.url2} target="_blank" rel="noreferrer">
        <img
          src={props.img}
          className="rounded-xl shadow-sm"
          alt="project-img"
        ></img>
      </a>
      <div className="py-8">
        <a href={props.url2} target="_blank" rel="noreferrer">
          <h4 className="text-2xl font-bold hover:text-orange w-max">
            {props.name}
          </h4>
        </a>
        <div className="text-md font-regular opacity-50 py-2">
          {props.techStack}
        </div>
        <p className="text-lg font-regular">{props.desc}</p>
      </div>
      <a
        className="flex flex-row group w-max"
        href={props.url}
        target="_blank"
        rel="noreferrer"
      >
        <div className="text-lg font-medium text-orange">
          See project on Github
        </div>
        <div className="flex items-center pl-2 transform transition duration-150 ease-in group-hover:translate-x-2">
          <img className="h-5" src={arrow} alt="arrow" />
        </div>
      </a>
    </div>
  )
}

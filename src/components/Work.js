import React from "react"
import ProjectCard from "./ProjectCard"

export default function Work(props) {
  const renderProjects = () => {
    return props.projects.map(project => {
      return (
        <ProjectCard
          key={project.id}
          img={project.img}
          name={project.name}
          desc={project.desc}
          techStack={project.techStack}
          url={project.link}
          url2={project.link2}
        />
      )
    })
  }

  return (
    <div className="py-20 gnrl-padding" id="work">
      <div className="pb-20">
        <h1 className="font-black text-4xl md:text-5xl uppercase">
          Projects I'm Proud Of
        </h1>
        <div>
          <p className="pt-6 font-regular w-full xl:w-2/5">
            Over the years, I've had the opportunity to use my free time to
            develop some cool web projects. Here's some of my best work
            available online.
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="grid gap-16 md:gap-12 grid-cols-1 md:grid-cols-2">
          {renderProjects()}
        </div>
      </div>
    </div>
  )
}

import React from "react"

export default function Skills() {
  return (
    <div className="py-20 gnrl-padding">
      <div>
        <h1 className="font-black text-4xl md:text-5xl uppercase">Skills</h1>
        <div>
          <p className="pt-6 font-regular w-full xl:w-2/5">
            In all my developer life, I've worked with different tools and
            technologies, obtaining some experience and skills in web
            development. I also love to learn about new or upcoming
            technologies.
          </p>
        </div>
      </div>
      <div className="py-10 gap-16 grid grid-cols-1 md:grid-cols-3">
        <div>
          <div className="flex flex-row py-2 font-medium text-sm items-center">
            <h5 className="pr-2 text-orange">01</h5>
            <div className="bg-orange h-0.5 w-1/5"></div>
          </div>
          <h2 className="font-bold text-2xl">Frontend Technologies</h2>
          <p className="font-regular text-lg py-3 opacity-75">
            React, Angular, Sass, Server Side Rendering, HTML, CSS, Javascript,
            Gatsby, Next.js, Typescript, ES6.
          </p>
        </div>
        <div>
          <div className="flex flex-row py-2 font-medium text-sm items-center">
            <h5 className="pr-2 text-orange">02</h5>
            <div className="bg-orange h-0.5 w-1/5"></div>
          </div>
          <h2 className="font-bold text-2xl">Backend Technologies</h2>
          <p className="font-regular text-lg py-3 opacity-75">
            Node.js, RESTful API's, Express, Typescript, GraphQl, Postgres,
            MongoDB, Serverless (Firebase).
          </p>
        </div>
        <div>
          <div className="flex flex-row py-2 font-medium text-sm items-center">
            <h5 className="pr-2 text-orange">03</h5>
            <div className="bg-orange h-0.5 w-1/5"></div>
          </div>
          <h2 className="font-bold text-2xl">Tools</h2>
          <p className="font-regular text-lg py-3 opacity-75">
            Slack, Jira, Figma, Adobe XD, Zoho Sprints, Notion, Google Suite,
            Git, Github, Gitlab, AWS.
          </p>
        </div>
        <div>
          <div className="flex flex-row py-2 font-medium text-sm items-center">
            <h5 className="pr-2 text-orange">04</h5>
            <div className="bg-orange h-0.5 w-1/5"></div>
          </div>
          <h2 className="font-bold text-2xl">Workspace</h2>
          <p className="font-regular text-lg py-3 opacity-75">
            AGILE (Scrum), Team Work, Remote Work, Github PR, Github Realeases,
            Gitflow Methodology, CI/CD, Bilingual Enviroment, GSuite.
          </p>
        </div>
        <div>
          <div className="flex flex-row py-2 font-medium text-sm items-center">
            <h5 className="pr-2 text-orange">05</h5>
            <div className="bg-orange h-0.5 w-1/5"></div>
          </div>
          <h2 className="font-bold text-2xl">Software Development & More</h2>
          <p className="font-regular text-lg py-3 opacity-75">
            English(C1), MVVM Architecture, Object Oriented Programing,
            Architectural Patterns, Testing.
          </p>
        </div>
      </div>
    </div>
  )
}

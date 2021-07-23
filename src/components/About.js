import React from "react"
import personalImg from "../images/personal-img.jpg"

export default function About(props) {
  return (
    <div className="py-20 bg-gray2 gnrl-padding" id="about">
      <h1 className="font-black pb-8 md:pb-0 text-4xl md:text-5xl uppercase">
        Nice to meet you
      </h1>
      <div className="flex xl:py-0 xl:gap-24 flex-col xl:flex-row">
        <p className="font-light text-lg order-2 xl:order-1 py-8">
          <span className="font-light text-xl">
            I’m Sergio Naranjo – a Full Stack Developer from Colombia. I
            currently work as a {props.job} at{" "}
            <a
              className="font-medium border-solid border-b-2 border-orange hover:bg-orange transition-colors"
              href={props.companyUrl}
            >
              <span>{props.company}</span>
            </a>{" "}
            and run{" "}
            <a
              className="font-medium border-solid border-b-2 border-orange hover:bg-orange transition-colors"
              href="https://github.com/snaranjop1"
            >
              <span>Ultrasoccer</span>
            </a>
            . I like to build top quality software, beatiful UI’s and enhancing
            experiences.
          </span>
          <br />
          <br />
          I grew up in a very small town in Colombia called Manizales and moved
          to Bogotá in 2016 to pursue higher education. I studied Systems
          Engineering at Universidad de los Andes and taught myself a little of
          UX/UI design from the internet. Making static websites is what got me
          into web development in the first place. I can never forget the sheer
          joy of putting something on the internet while I was still in college.
          <br />
          <br />
          Since the begining of my journey i’ve been interested in web
          development, specially in frontend development because i love the
          UI/UX design. I also have backend development experience but the
          designer in me prefers to work in frontend.
          <br />
          <br />
          When I'm not developing, I'm either working on my side-projects or
          searching for good food spots. I'm a simple man that way 😁.
        </p>
        <div className="order-1 xl:order-2 w-auto object-center xl:pt-8">
          <img
            src={personalImg}
            alt="personal-img"
            className="w-full object-cover rounded-lg shadow-md h-96 xl:h-full"
          />
        </div>
      </div>
    </div>
  )
}

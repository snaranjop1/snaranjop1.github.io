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
          <em>
            <span className="font-light text-xl">
              I’m Sergio Naranjo – a Software Engineer from Colombia. I
              specialize in building (and occasionally designing) exceptional
              web digital experiences.
            </span>
          </em>
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
          From 2021 to 2022 I had the opportunity to make a master’s degree in
          High Performance Web Programming at La Salle University in Barcelona.
          This master helped me take a deep and fast overview of web
          development, going from HTML/CSS/JS to Cloud deployment and
          cybersecurity. I learned a lot about clean architectures, good
          practices in software development and strategies to make high
          performance web apps (Caching, Concurrency and Big Data). I also had
          the opportunity to learn from experts, software development techniques
          such as DDD and TDD and what they require to be applied in the best
          way.
          <br />
          <br />
          Fast-forward to today, I’ve had the privilege of working with
          different US-based clients doing web development, specially frontend
          development. Currently I'm working as a {props.job} at{" "}
          <a
            className="border-solid border-b-2 border-orange hover:bg-orange transition-colors"
            href={props.companyUrl}
            target="_blank"
            rel="noreferrer"
          >
            {props.company}
          </a>
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

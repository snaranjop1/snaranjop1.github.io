import { graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

import About from "../components/About"
import Footer from "../components/Footer"
import Home from "../components/Home"
import Navbar from "../components/Navbar"
import Skills from "../components/Skills"
import Work from "../components/Work"

export default function App({ data }) {
  let metadata = data.site.siteMetadata

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sergio Naranjo - Software Engineer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="Software Engineer" />
        <meta
          name="keyword"
          content="portfolio, javascript, developer, frontends, sergio, software"
        />
      </Helmet>
      <Navbar />
      <Home
        job={metadata.job}
        company={metadata.company}
        companyUrl={metadata.companyUrl}
        mainProjectUrl={metadata.projects[0].link}
      />
      <Work projects={metadata.projects} />
      <About
        job={metadata.job}
        company={metadata.company}
        companyUrl={metadata.companyUrl}
      />
      <Skills />
      <Footer />
    </div>
  )
}

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        company
        companyUrl
        job
        projects {
          desc
          id
          img
          techStack
          name
          link
          link2
        }
      }
    }
  }
`

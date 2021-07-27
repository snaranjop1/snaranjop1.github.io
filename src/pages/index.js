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
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sergio Naranjo - Full Stack Developer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="Full Stack Developer" />
        <meta
          name="keyword"
          content="portfolio, javascript, developer, full stack, sergio"
        />
      </Helmet>
      <Navbar />
      <Home
        job={metadata.job}
        company={metadata.company}
        companyUrl={metadata.companyUrl}
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
        }
      }
    }
  }
`

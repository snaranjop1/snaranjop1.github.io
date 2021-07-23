import { graphql } from "gatsby"
import React from "react"
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

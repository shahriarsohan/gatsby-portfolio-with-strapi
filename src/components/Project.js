import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"

import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { graphql, useStaticQuery, Link } from "gatsby"
import Title from "./Title"

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

const Project = () => {
  const data = useStaticQuery(query)

  const {
    allStrapiProjects: { nodes: projects },
  } = data

  console.log(projects)

  return (
    <section className="section projects">
      <Title title="featured projects" />
      <div className="section-center projects-center">
        {projects.map((proj, index) => {
          return (
            <article className="project">
              {proj.image && (
                <Image
                  fluid={proj.image.childImageSharp.fluid}
                  className="project-img"
                />
              )}
              <div className="project-info">
                <h3>{proj.title || "default title"}</h3>
                <p className="project-desc">{proj.description}</p>
                <div className="project-stack">
                  {proj.stack.map(item => {
                    return <span key={item.id}>{item.title}</span>
                  })}
                </div>
                <div className="project-links">
                  <a href={proj.github}>
                    <FaGithubSquare className="project-icon" />
                  </a>
                  <a href={proj.url}>
                    <FaShareSquare className="project-icon" />
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>
      <Link to="/projects" className="btn center-btn">
        More Projects
      </Link>
    </section>
  )
}

Project.propTypes = {}

export default Project

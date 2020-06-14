import React from "react"
import {
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.twitter.com",
  },
  {
    id: 2,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/shahriarsohan",
  },
  {
    id: 3,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/sohanpy/",
  },
  {
    id: 4,
    icon: <FaStackOverflow className="social-icon"></FaStackOverflow>,
    url: "https://stackoverflow.com/users/11941865/shahriar-sohan",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}

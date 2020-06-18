import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

import Hero from "./Hero"
import Services from "./Services"
import Jobs from "./Jobs"
import Projects from "./Project"
import { Contact } from "./Contact"
import { Testimonial } from "./Testimonial"

const Layout = ({ children }) => {
  const [isOpen, setisOpen] = React.useState(false)

  const toggleSidebar = () => {
    setisOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Hero />
      <Services />
      <Jobs />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default Layout

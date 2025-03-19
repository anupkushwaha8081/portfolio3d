import React from 'react'
import Navbar from './Section/Navbar'
import Hero from './Section/Hero'
import About from './Section/About'
import Contact from './Section/Contact'
import Projects from './Section/Projects'
import Clients from './Section/Clients'
import WorkExperience from './Section/WorkExperience'
import Footer from './Section/Footer'

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
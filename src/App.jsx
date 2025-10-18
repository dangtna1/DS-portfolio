import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'
import About from './components/About'
import data from './data'
import USP from './components/USP'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <div>
      <Nav />
      <main className="pt-24">
        <Hero />

        <About />

        <USP />

        <section id="projects" className="py-20">
          <div className="container">
            <h2 className="text-2xl font-semibold text-ocean-300 mb-6">Projects</h2>
            <Projects />
          </div>
        </section>

        <Experience />

        <Education />

        <Contact />

        <Footer />
      </main>
    </div>
  )
}

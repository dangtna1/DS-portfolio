import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'
import About from './components/About'
import data from './data'

export default function App() {
  return (
    <div>
      <Nav />
      <main className="pt-24">
        <Hero />

        <About />

        <section id="skills" className="py-20">
          <div className="container">
            <h2 className="text-2xl font-semibold text-ocean-300 mb-6">Skills</h2>
            <Skills />
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container">
            <h2 className="text-2xl font-semibold text-ocean-300 mb-6">Projects</h2>
            <Projects />
          </div>
        </section>

        <section id="experience" className="py-20">
          <div className="container">
            <h2 className="text-2xl font-semibold text-ocean-300 mb-6">Experience</h2>
            <Experience />
          </div>
        </section>

        <section id="education" className="py-20">
          <div className="container">
            <h2 className="text-2xl font-semibold text-ocean-300 mb-6">Education</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {data.education.map((ed, i) => (
                <div key={i} className="card">
                  <h4 className="font-semibold">{ed.degree}</h4>
                  <p className="text-sm text-slate-400">{ed.org} · {ed.period}</p>
                  <p className="text-sm text-slate-300 mt-2">{ed.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container">
            <h2 className="text-2xl font-semibold text-ocean-300 mb-6">Contact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card">
                <h4 className="font-semibold">Get in touch</h4>
                <p className="mt-2 text-slate-300">Email: <a className="text-ocean-200" href={"mailto:" + data.email}>{data.email}</a></p>
                <p className="mt-2 text-slate-300">Phone: {data.phone}</p>
              </div>
              <div className="card">
                <h4 className="font-semibold">Message me</h4>
                <form name="contact" method="POST" data-netlify="true" className="flex flex-col gap-3">
                  <input type="hidden" name="form-name" value="contact" />
                  <input name="name" placeholder="Your name" className="px-3 py-2 bg-transparent border border-slate-700 rounded-md" />
                  <input name="email" placeholder="Your email" className="px-3 py-2 bg-transparent border border-slate-700 rounded-md" />
                  <textarea name="message" placeholder="Message" rows="4" className="px-3 py-2 bg-transparent border border-slate-700 rounded-md"></textarea>
                  <button className="mt-2 px-4 py-2 bg-ocean-500 rounded-md text-slate-900">Send</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}

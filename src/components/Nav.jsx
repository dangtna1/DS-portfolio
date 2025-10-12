import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'

export default function Nav(){
  const [open, setOpen] = React.useState(false)
  return (
    <nav className="fixed w-full z-50 top-4">
      <div className="container flex items-center justify-between">
        <div className="text-xl font-semibold text-ocean-300">Dang Vu</div>
        <div className="hidden md:flex items-center gap-6">
          <ScrollLink to="about" smooth duration={400} className="cursor-pointer">About</ScrollLink>
          <ScrollLink to="projects" smooth duration={400} className="cursor-pointer">Projects</ScrollLink>
          <ScrollLink to="experience" smooth duration={400} className="cursor-pointer">Experience</ScrollLink>
          <ScrollLink to="contact" smooth duration={400} className="cursor-pointer">Contact</ScrollLink>
          <a href="/Dang-Vu-Data-Scientist.pdf" download className="ml-4 px-4 py-2 bg-ocean-500/90 rounded-lg text-slate-900 font-medium flex items-center gap-2">
            <FiDownload /> CV
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(true)} className="p-2 rounded-md bg-white/3"><FiMenu /></button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/50 flex">
          <div className="m-4 ml-auto w-64 bg-slate-900/90 p-4 rounded-lg">
            <div className="flex justify-end"><button onClick={() => setOpen(false)} className="p-2"><FiX /></button></div>
            <div className="flex flex-col gap-3 mt-4">
              <ScrollLink to="about" smooth duration={300} onClick={() => setOpen(false)} className="cursor-pointer">About</ScrollLink>
              <ScrollLink to="projects" smooth duration={300} onClick={() => setOpen(false)} className="cursor-pointer">Projects</ScrollLink>
              <ScrollLink to="experience" smooth duration={300} onClick={() => setOpen(false)} className="cursor-pointer">Experience</ScrollLink>
              <ScrollLink to="contact" smooth duration={300} onClick={() => setOpen(false)} className="cursor-pointer">Contact</ScrollLink>
              <a href="/Dang-Vu-Data-Scientist.pdf" download className="mt-3 px-4 py-2 bg-ocean-500 rounded-md text-slate-900 inline-flex items-center gap-2">Download CV</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

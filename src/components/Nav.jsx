import React, { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all ${
        scrolled ? 'bg-slate-900/70 backdrop-blur-xl shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-xl font-semibold text-ocean-300 tracking-wide cursor-default">
          Dang Vu
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-slate-300">
          {['about', 'projects', 'experience', 'contact'].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth
              duration={400}
              offset={-80}
              className="cursor-pointer hover:text-ocean-200 transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}

          <a
            href="/Dang-Vu-Data-Scientist.pdf"
            download
            className="ml-4 px-4 py-2 bg-gradient-to-r from-ocean-400 to-[#9b6bff] rounded-lg text-slate-900 font-medium flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
          >
            <FiDownload /> CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
          >
            <FiMenu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex">
          <div className="m-4 ml-auto w-64 bg-slate-900/95 p-5 rounded-2xl shadow-xl backdrop-blur-lg">
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-slate-400 hover:text-ocean-300 transition"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-4 mt-6 text-slate-300">
              {['about', 'projects', 'experience', 'contact'].map((section) => (
                <ScrollLink
                  key={section}
                  to={section}
                  smooth
                  duration={300}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer hover:text-ocean-200 transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              ))}

              <a
                href="/Dang-Vu-Data-Scientist.pdf"
                download
                className="mt-3 px-4 py-2 bg-ocean-500 rounded-md text-slate-900 inline-flex items-center gap-2 justify-center hover:bg-ocean-400 transition"
              >
                <FiDownload /> Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

import React from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import data from '../data'

export default function Footer() {
  return (
    <footer className="relative py-12 bg-slate-950/60 backdrop-blur-lg border-t border-slate-800">
      <div className="container text-center flex flex-col items-center gap-4">
        <div className="flex gap-5 text-slate-400">
          <a
            href={`mailto:${data.email}`}
            className="hover:text-ocean-300 transition-colors"
          >
            <FiMail size={20} />
          </a>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-ocean-300 transition-colors"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-ocean-300 transition-colors"
          >
            <FiGithub size={20} />
          </a>
        </div>

        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} <span className="text-ocean-300 font-medium">Dang Vu</span> · Built with React, Tailwind & Framer Motion
        </p>
      </div>

      {/* Subtle glow behind footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-ocean-500/10 rounded-full blur-[100px]" />
    </footer>
  )
}

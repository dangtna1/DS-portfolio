import React from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'
import data from '../data'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-center overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-ocean-500/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#9b6bff]/10 rounded-full blur-[180px]" />

      <div className="container relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-ocean-300 to-[#9b6bff]"
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-slate-400 max-w-xl mx-auto"
        >
          I’m always open to discussing data science, analytics, or collaboration opportunities.  
          Whether you’d like to chat about a role or a project, feel free to reach out!
        </motion.p>

        {/* Contact buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href={`mailto:${data.email}`}
            className="flex items-center gap-2 px-5 py-3 bg-ocean-500/90 rounded-xl text-slate-900 font-medium hover:bg-ocean-400 transition-all shadow-glow"
          >
            <FiMail size={18} /> Email Me
          </a>

          <a
            href={data.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 border border-slate-700 rounded-xl text-slate-300 hover:text-ocean-200 hover:border-ocean-400 transition-all"
          >
            <FiLinkedin size={18} /> LinkedIn
          </a>

          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 border border-slate-700 rounded-xl text-slate-300 hover:text-ocean-200 hover:border-ocean-400 transition-all"
          >
            <FiGithub size={18} /> GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

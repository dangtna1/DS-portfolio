import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi'
import data from '../data'
import initParticles from '../utils/particles'
import profilePhoto from '../assets/profile.jpg' // replace with your path

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    initParticles(canvasRef.current)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none"></canvas>

      <div className="container relative z-10 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-ocean-200 to-[#9b6bff] animate-gradient">
              Hi, I’m Dang Vu
            </span>
          </h1>

          {/* New Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 text-slate-300 max-w-xl text-lg md:text-xl"
          >
            Tuning <span className="bg-clip-text text-transparent bg-gradient-to-r from-ocean-300 to-[#9b6bff] font-semibold">data</span> into <span className="bg-clip-text text-transparent bg-gradient-to-r from-ocean-300 to-[#9b6bff] font-semibold">insights</span>, building models and dashboards that turn information into action.
          </motion.p>

          <div className="mt-6 flex flex-wrap gap-3">
            <motion.a whileHover={{ scale: 1.05 }} href={data.github} target="_blank" rel="noreferrer" className="px-4 py-2 bg-ocean-500 rounded-lg text-slate-900 flex items-center gap-2 shadow-glow">
              <FiGithub /> GitHub
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} href={data.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 border border-slate-700 rounded-lg flex items-center gap-2">
              <FiLinkedin /> LinkedIn
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} href="/Dang-Vu-Data-Scientist.pdf" download className="px-4 py-2 bg-white/5 rounded-lg flex items-center gap-2">
              <FiDownload /> CV
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-72"
        >
          <motion.div
            whileHover={{ rotateY: 15, rotateX: 10, scale: 1.05 }}
            className="rounded-full overflow-hidden border-4 border-gradient-to-br from-ocean-400 to-[#7b61ff]"
          >
            <img
              src={profilePhoto}
              alt="Dang Vu"
              className="w-72 h-72 object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

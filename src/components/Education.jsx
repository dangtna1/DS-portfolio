import React from 'react'
import { motion } from 'framer-motion'
import { FiBook, FiAward } from 'react-icons/fi'
import data from '../data'

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Animated glow line through the middle */}
      <div className="absolute inset-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          className="absolute top-1/2 w-full h-[2px] bg-gradient-to-r from-ocean-400/0 via-ocean-400/40 to-ocean-400/0 blur-sm bg-[length:200%_200%]"
        />
      </div>

      <div className="container relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-ocean-300 to-[#9b6bff] mb-16"
        >
          My Academic Journey
        </motion.h2>

        {/* Education cards row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {data.education.map((ed, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: '0 0 25px rgba(130,180,255,0.25)',
              }}
              className="relative w-full md:w-80 bg-slate-900/60 rounded-3xl border border-slate-800 backdrop-blur-xl p-6 text-left transition-all flex flex-col justify-between min-h-[260px]"
            >
              {/* Floating glow orb */}
              <motion.div
                className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-br from-ocean-400 to-[#9b6bff] blur-md opacity-30"
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              />

              {/* Top content */}
              <div>
                <div className="flex items-center gap-4">
                  {ed.thumbnail && (
                    <img
                      src={ed.thumbnail}
                      alt={ed.org}
                      className="w-12 h-12 object-cover rounded-xl border border-slate-700"
                    />
                  )}
                  <div>
                    <h4 className="font-semibold text-base md:text-lg text-slate-100 leading-tight">
                      {ed.degree.length > 35
                        ? ed.degree.replace('(First-Class Honours)', '(1st Class)')
                        : ed.degree}
                    </h4>
                    <p className="text-sm text-slate-400">{ed.period}</p>
                  </div>
                </div>

                <div className="mt-4 text-slate-300 text-sm">
                  <p>{ed.org}</p>
                  <p className="mt-2 text-slate-400 leading-relaxed line-clamp-2">
                    {ed.notes}
                  </p>
                </div>
              </div>

              {/* Bottom icon */}
              <div className="mt-auto pt-4 text-ocean-300/70 self-end">
                {i === 0 ? <FiAward size={20} /> : <FiBook size={20} />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ambient background gradient orbs */}
      <div className="absolute -top-40 left-1/3 w-72 h-72 bg-ocean-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#9b6bff]/10 rounded-full blur-[160px]" />
    </section>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import { FiUsers, FiCheckCircle, FiRepeat, FiBookOpen } from 'react-icons/fi'

export default function USP() {
  const usps = [
    {
      icon: <FiUsers className="w-8 h-8 text-ocean-200" />,
      title: 'Team Player',
      desc: 'Believes in collaboration, open communication, and collective success.',
    },
    {
      icon: <FiCheckCircle className="w-8 h-8 text-ocean-200" />,
      title: 'Ownership',
      desc: 'Takes full accountability from start to finish, ensuring high-quality results.',
    },
    {
      icon: <FiRepeat className="w-8 h-8 text-ocean-200" />,
      title: 'Flexible & Adaptive',
      desc: 'Thrives in dynamic environments and embraces new challenges confidently.',
    },
    {
      icon: <FiBookOpen className="w-8 h-8 text-ocean-200" />,
      title: 'Continuous Learner',
      desc: 'Constantly exploring emerging technologies and improving analytical skills.',
    },
  ]

  return (
    <section
      id="usp"
      className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,rgba(80,180,255,0.15),transparent_60%)]
"
    >
      <div className="container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-ocean-300 to-[#9b6bff] mb-12"
        >
          What Makes Me Different
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((u, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: '0 0 25px rgba(80, 180, 255, 0.3)',
              }}
              className="group relative overflow-hidden rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl p-8 flex flex-col items-center text-center transition-transform duration-300"
            >
              {/* Gradient Border Animation */}
              <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-ocean-400/30 to-[#9b6bff]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-ocean-400/20 to-[#9b6bff]/20 shadow-inner">
                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.1,
                    }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {u.icon}
                  </motion.div>
                </div>

                <h3 className="font-semibold text-lg text-ocean-200">
                  {u.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {u.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

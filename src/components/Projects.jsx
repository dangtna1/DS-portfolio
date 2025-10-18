import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiX, FiPlay } from 'react-icons/fi'
import data from '../data'

function Modal({ open, onClose, project }) {
  if (!open) return null

  const hasResults = project.results && Object.keys(project.results).length > 0

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative bg-slate-900/95 p-6 rounded-2xl max-w-2xl w-full border border-slate-800 shadow-xl overflow-y-auto max-h-[90vh]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-ocean-300 transition"
          >
            <FiX size={22} />
          </button>

          {/* Optional image or video */}
          {project.media && (
            <div className="mb-5 rounded-lg overflow-hidden border border-slate-800">
              {project.media.endsWith('.mp4') || project.media.endsWith('.mov') ? (
                <video
                  src={project.media}
                  className="w-full rounded-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={project.media}
                  alt={project.title}
                  className="w-full rounded-lg object-cover"
                />
              )}
            </div>
          )}

          {/* Project Title & Period */}
          <h3 className="text-xl font-semibold text-ocean-200">{project.title}</h3>
          <p className="text-sm text-slate-400 mb-3">{project.period}</p>

          {/* Description */}
          <p className="text-slate-300 leading-relaxed">{project.desc}</p>

          {/* Results Section */}
          {hasResults && (
            <div className="mt-6 bg-slate-800/40 border border-slate-700 rounded-xl p-4">
              <h4 className="font-semibold text-ocean-300 mb-3">Model Performance</h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-slate-300 text-sm mb-3">
                {project.results.model && (
                  <div>
                    <span className="text-slate-400">Model</span>
                    <p className="font-medium">{project.results.model}</p>
                  </div>
                )}
                {project.results.accuracy && (
                  <div>
                    <span className="text-slate-400">Accuracy</span>
                    <p className="font-medium">{project.results.accuracy}</p>
                  </div>
                )}
                {project.results.roc_auc && (
                  <div>
                    <span className="text-slate-400">ROC-AUC</span>
                    <p className="font-medium">{project.results.roc_auc}</p>
                  </div>
                )}
              </div>

              {/* Key Points */}
              {project.results.key_points && (
                <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
                  {project.results.key_points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Tech stack */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-slate-800 text-slate-200 text-sm rounded-full border border-slate-700"
              >
                {t}
              </span>
            ))}
          </div>

          {/* GitHub & Demo Links */}
          <div className="mt-6 flex justify-end gap-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-slate-900 bg-gradient-to-r from-ocean-400 to-[#9b6bff] shadow-md hover:scale-105 transition-transform"
              >
                Live Demo →
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 text-slate-200 hover:text-ocean-200 hover:border-ocean-400 transition-all"
              >
                <FiGithub /> GitHub
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}


export default function Projects() {
  const [open, setOpen] = React.useState(false)
  const [proj, setProj] = React.useState(null)

  const show = (p) => {
    setProj(p)
    setOpen(true)
  }

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-ocean-500/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#9b6bff]/10 rounded-full blur-[160px]" />

      <div className="container relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-ocean-300 to-[#9b6bff] mb-10 text-center"
        >
          Featured Data Science Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-center text-slate-400 max-w-2xl mx-auto mb-14"
        >
          A selection of research-driven and industry-focused projects that showcase my
          expertise in Machine Learning, NLP, and Computer Vision — turning data into
          actionable insights and scalable AI solutions.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {data.projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, y: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="group cursor-pointer relative rounded-2xl overflow-hidden bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-lg hover:border-ocean-400/50 transition-all"
              onClick={() => show(p)}
            >
              {p.media && (
                <div className="h-48 overflow-hidden">
                  {p.media.endsWith('.mp4') || p.media.endsWith('.mov') ? (
                    <video
                      src={p.media}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={p.media}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg text-slate-100">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-400">{p.period}</p>
                  </div>
                  <div className="text-sm text-ocean-200 font-medium">
                    {p.tech.slice(0, 2).join(' · ')}
                    {p.tech.length > 2 ? ' +' : ''}
                  </div>
                </div>
                <p className="mt-4 text-slate-300 line-clamp-3">{p.desc}</p>
              </div>

              {/* Play icon overlay */}
              {p.media && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition">
                  <FiPlay size={36} className="text-ocean-300 drop-shadow-md" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <Modal open={open} project={proj || {}} onClose={() => setOpen(false)} />
    </section>
  )
}

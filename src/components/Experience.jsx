import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import data from '../data'

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-950/40 backdrop-blur-sm">
      <div className="container">
        <h2 className="text-2xl font-semibold text-ocean-300 mb-10">Experience</h2>

        <div className="space-y-12">
          {data.experience.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8 border-l border-slate-800 hover:border-ocean-400/50 transition-all"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[6px] top-2 w-3 h-3 rounded-full bg-ocean-400"></div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  {e.thumbnail && (
                    <img
                      src={e.thumbnail}
                      alt={e.org}
                      className="w-10 h-10 rounded-lg object-cover border border-slate-700"
                    />
                  )}
                  <div>
                    <h4 className="font-semibold text-lg text-slate-100">{e.role}</h4>
                    <p className="text-sm text-slate-400">{e.org}</p>
                  </div>
                </div>
                <div className="text-sm text-slate-400">{e.period}</div>
              </div>

              <ul className="mt-3 text-slate-300 list-disc list-inside space-y-1">
                {e.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>

              {e.link && (
                <div className="mt-3">
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-ocean-300 text-sm hover:text-ocean-200 transition-colors"
                  >
                    View More <FiExternalLink className="inline-block" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Earlier Experience Summary */}
        <div className="mt-12 text-slate-400 text-sm italic">
          Earlier experience includes internships at <strong>iDeaLogic</strong> and <strong>TecAlliance</strong>,
          where I contributed to analytics dashboards, automation workflows, and data-visualisation tools.
        </div>
      </div>
    </section>
  )
}

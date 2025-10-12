import React from 'react'
import { motion } from 'framer-motion'
import data from '../data'

function Modal({open, onClose, project}){
  if(!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <motion.div initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}} className="bg-slate-900/95 p-6 rounded-2xl max-w-2xl w-full">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-slate-400">{project.period}</p>
          </div>
          <button onClick={onClose} className="text-slate-400">Close</button>
        </div>
        <p className="mt-4 text-slate-300">{project.desc}</p>
        <div className="mt-4 flex gap-2 flex-wrap">
          {project.tech.map((t,idx) => <span key={idx} className="badge">{t}</span>)}
        </div>
        <div className="mt-6 text-right">
          <a href={project.github} target="_blank" rel="noreferrer" className="text-ocean-200">View on GitHub →</a>
        </div>
      </motion.div>
    </div>
  )
}

export default function Projects(){
  const [open, setOpen] = React.useState(false)
  const [proj, setProj] = React.useState(null)
  function show(p){ setProj(p); setOpen(true) }
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        {data.projects.map((p,i) => (
          <motion.div key={i} whileHover={{ scale:1.02, y:-6 }} className="card cursor-pointer" onClick={() => show(p)}>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-slate-400">{p.period}</p>
              </div>
              <div className="text-sm text-ocean-200">{p.tech.join(' · ')}</div>
            </div>
            <p className="mt-4 text-slate-300">{p.desc}</p>
          </motion.div>
        ))}
      </div>
      <Modal open={open} project={proj || {}} onClose={() => setOpen(false)} />
    </>
  )
}

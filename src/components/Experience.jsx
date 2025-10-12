import React from 'react'
import { motion } from 'framer-motion'
import data from '../data'

export default function Experience(){
  return (
    <div className="space-y-6">
      {data.experience.map((e,i) => (
        <motion.div key={i} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="flex gap-6">
          <div className="w-2">
            <div className="h-2 w-2 rounded-full bg-ocean-400 mt-2"></div>
            <div className="h-full w-px bg-slate-800 ml-1"></div>
          </div>
          <div className="flex-1 card">
            <div className="flex justify-between">
              <div>
                <h4 className="font-semibold">{e.role}</h4>
                <p className="text-sm text-slate-400">{e.org}</p>
              </div>
              <div className="text-sm text-slate-400">{e.period}</div>
            </div>
            <ul className="mt-2 text-slate-300 list-disc list-inside">
              {e.bullets.map((b,idx) => <li key={idx}>{b}</li>)}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

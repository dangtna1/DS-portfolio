import React from 'react'
import { FaPython, FaDocker, FaAws } from 'react-icons/fa'
import { SiPytorch, SiTensorflow, SiPowerbi, SiPostgresql, SiFastapi } from 'react-icons/si'
import { motion } from 'framer-motion'
import data from '../data'

const iconMap = {
  "Python": <FaPython className="w-6 h-6"/>,
  "PyTorch": <SiPytorch className="w-6 h-6"/>,
  "TensorFlow": <SiTensorflow className="w-6 h-6"/>,
  "SQL": <SiPostgresql className="w-6 h-6"/>,
  "Power BI": <SiPowerbi className="w-6 h-6"/>,
  "Docker": <FaDocker className="w-6 h-6"/>,
  "AWS": <FaAws className="w-6 h-6"/>,
  "FastAPI": <SiFastapi className="w-6 h-6"/>
}

export default function Skills(){
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {data.skills.map((s,i) => (
        <motion.div key={i} whileHover={{ y:-8 }} transition={{type:'spring'}} className="card flex items-center gap-4">
          <div className="p-3 bg-white/5 rounded-lg">
            {iconMap[s.name] || <div className="w-6 h-6"></div>}
          </div>
          <div>
            <div className="font-semibold">{s.name}</div>
            <div className="text-sm text-slate-400">{s.level}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

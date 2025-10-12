import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiBarChart2, FiDatabase, FiTrendingUp } from 'react-icons/fi'
import data from '../data'

export default function About() {
  const skills = [
    { name: 'Python', color: 'bg-ocean-500 text-slate-900', icon: <FiCode /> },
    { name: 'PyTorch', color: 'bg-purple-500 text-white', icon: <FiCpu /> },
    { name: 'Power BI', color: 'bg-green-500 text-white', icon: <FiBarChart2 /> },
    { name: 'OpenCV', color: 'bg-blue-500 text-white', icon: <FiDatabase /> },
    { name: 'NLP', color: 'bg-pink-500 text-white', icon: <FiTrendingUp /> },
  ]

  return (
    <section id="about" className="py-20">
      <div className="container flex flex-col md:flex-row items-start gap-10">
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="flex-1 card p-8 bg-slate-900/70 rounded-2xl shadow-lg backdrop-blur-md"
        >
          <h2 className="text-2xl font-semibold text-ocean-300 mb-6">About Me</h2>

          <p className="text-slate-300 mb-4">
            <strong>Data Scientist</strong> specializing in ML & Deep Learning with industrial experience in Computer Vision & NLP.
          </p>
          <p className="text-slate-300 mb-4">
            <strong>Technical toolkit:</strong> Python, PyTorch, Scikit-learn, Pandas, OpenCV, NLTK, Power BI, cloud pipelines.
          </p>
          <p className="text-slate-300 mb-4">
            <strong>Impact:</strong> Automated processes, improved efficiency, optimized resources, and turned raw data into actionable insights.
          </p>
          <p className="text-slate-300 mb-4">
            <strong>Passion:</strong> I love working with numbers, uncovering hidden patterns, and turning chaos into clarity.
          </p>

          {/* Skills Badges */}
          <div className="flex flex-wrap gap-3 mt-6">
            {skills.map((skill, idx) => (
              <motion.span
                key={idx}
                initial={{opacity:0, y:10}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{delay:0.1 * idx}}
                className={`px-3 py-1 rounded-full flex items-center gap-1 font-semibold ${skill.color}`}
              >
                {skill.icon} {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

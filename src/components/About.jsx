import React from 'react'
import { motion } from 'framer-motion'
import { 
  FiCode, FiCpu, FiBarChart2, FiDatabase, FiTrendingUp 
} from 'react-icons/fi'
import { 
  FaPython, FaDocker, FaAws 
} from 'react-icons/fa'
import { 
  SiPytorch, SiTensorflow, SiPowerbi, SiPostgresql, SiFastapi 
} from 'react-icons/si'

export default function About() {
  const skills = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'PyTorch', icon: <SiPytorch /> },
    { name: 'TensorFlow', icon: <SiTensorflow /> },
    { name: 'SQL', icon: <SiPostgresql /> },
    { name: 'Power BI', icon: <SiPowerbi /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'FastAPI', icon: <SiFastapi /> },
    { name: 'OpenCV', icon: <FiDatabase /> },
    { name: 'NLP', icon: <FiTrendingUp /> },
  ]

  return (
    <section id="about" className="py-20">
      <div className="container flex flex-col gap-16">
        {/* === ABOUT TEXT === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card p-8 bg-slate-900/70 rounded-2xl shadow-lg backdrop-blur-md"
        >
          <h2 className="text-2xl font-semibold text-ocean-300 mb-6">About Me</h2>

          <div className="space-y-4 text-slate-300 leading-relaxed tracking-wide">
            <p>
              <strong>Data Scientist</strong> with 2 years of professional experience across research and industry,
              holding an <strong>MSc (Distinction) in Data Science</strong>. I combine data science and software engineering
              expertise to deliver end-to-end machine learning and analytics solutions that create measurable business impact.
            </p>

            <p>
              I’m passionate about applying <strong>data-driven intelligence</strong> to solve real-world problems —
              from building scalable ML pipelines to developing data-rich dashboards that improve decision-making,
              customer engagement, and operational efficiency.
            </p>

            <p>
              Skilled in <strong>data modelling</strong>, <strong>automation</strong>, and <strong>cloud-based analytics</strong> (AWS & Azure),
              with experience deploying robust solutions using modern software engineering practices.
            </p>

            <p>
              I thrive on uncovering hidden patterns, transforming complexity into clarity, and driving data-informed
              outcomes in fast-paced, data-rich industries such as <strong>Ecommerce, Banking, and Healthcare</strong>.
            </p>
          </div>

          {/* === SKILLS GRID === */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-ocean-300 mb-6">Key Technologies & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring' }}
                  className="flex items-center gap-3 p-4 bg-slate-800/60 rounded-xl border border-slate-700 hover:border-ocean-400/60 transition-all"
                >
                  <div className="text-ocean-300 text-xl">{s.icon}</div>
                  <div className="font-medium">{s.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

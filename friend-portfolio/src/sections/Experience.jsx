import React from 'react';
import { motion } from 'framer-motion';
import experienceData from '../data/experience.json';

const Experience = () => {
  return (
    <section id="experience" className="section-padding py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold heading-gradient mb-4">Experience & Internships</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 md:ml-0 md:px-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-10 pl-8 relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white dark:ring-slate-900"></div>

              <div className="glass-effect rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">{exp.role}</h3>
                    <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400">{exp.company}</h4>
                  </div>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm font-medium whitespace-nowrap self-start">
                    {exp.duration}
                  </span>
                </div>

                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="leading-relaxed">{resp}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded border border-blue-100 dark:border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

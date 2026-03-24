import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import certificationsData from '../data/certifications.json';

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6  hover:shadow-xl transition-all border border-blue-100 dark:border-blue-900/30 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-xl text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Award size={28} />
                </div>
                <span className="text-sm font-medium px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full">
                  {cert.date}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 leading-tight">
                {cert.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium mb-4">{cert.issuer}</p>
              
              {cert.link && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors mt-auto"
                >
                  View Certificate <ExternalLink size={16} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from '../data/projects.json';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...new Set(projectsData.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold heading-gradient mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' 
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="glass-effect rounded-2xl overflow-hidden group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 hover:bg-white rounded-full text-white hover:text-slate-900 transition-colors backdrop-blur-sm">
                      <FaGithub size={20} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 hover:bg-white rounded-full text-white hover:text-slate-900 transition-colors backdrop-blur-sm">
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                    {project.stack.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

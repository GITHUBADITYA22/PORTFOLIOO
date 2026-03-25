import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

// Helper to dynamically render icons
const IconComponent = ({ name, color }) => {
  const Icon = FaIcons[name] || SiIcons[name];
  if (!Icon) return <span className="w-8 h-8 rounded-full bg-slate-200 block"></span>;
  return <Icon size={32} color={color} />;
};

const Skills = () => {
  const categories = Object.keys(skillsData);

  return (
    <section id="skills" className="section-padding py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold heading-gradient mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400"> Technologies I've worked with and am passionate about.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-effect rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-2">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skillsData[category].map((skill, index) => (
                  <div key={index} className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors group cursor-default">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      <IconComponent name={skill.icon} color={skill.color} />
                    </div>
                    <span className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

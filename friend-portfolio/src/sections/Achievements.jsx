import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, GitCommit, Code } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold heading-gradient mb-4">Achievements & Stats</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Competitive Programming */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
              <Trophy className="text-yellow-500" /> Competitive Programming
            </h3>

            <div className="glass-effect rounded-2xl p-6 hover:shadow-lg transition-all border border-blue-100 dark:border-blue-900/30">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-lg">LeetCode</h4>
                <span className="text-sm font-medium px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full">Top 40%</span>
              </div>
              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                <Code />
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">150+ Problems Solved</p>
                  <p className="text-sm">Consistent daily solver.</p>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6 hover:shadow-lg transition-all border border-blue-100 dark:border-blue-900/30">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-lg">HackerRank</h4>
                <div className="flex gap-1">
                  {[...Array(2)].map((_, i) => <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />)}
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                <Code />
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">2-Star in Problem Solving</p>
                  <p className="text-sm">Certified in Data Structures.</p>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6 hover:shadow-lg transition-all border border-blue-100 dark:border-blue-900/30">
              <h4 className="font-bold text-lg mb-2">Hackathon Wins</h4>
              <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400 text-sm">
                <li>1st Runner-Up at Smart India Hackathon 2025</li>
                <li>Best IoT Project at CodeFest 2024</li>
              </ul>
            </div>
          </motion.div>

          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
              <GitCommit className="text-blue-500" /> GitHub Statistics
            </h3>

            <div className="glass-effect rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col items-center justify-center space-y-6">
              <img
                src="https://github-readme-stats.vercel.app/api?username=torvalds&show_icons=true&theme=transparent&hide_border=true&title_color=3b82f6&text_color=64748b&icon_color=3b82f6"
                alt="GitHub Stats"
                className="w-full max-w-sm drop-shadow-md"
              />

              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=torvalds&layout=compact&theme=transparent&hide_border=true&title_color=3b82f6&text_color=64748b"
                alt="Top Languages"
                className="w-full max-w-sm drop-shadow-md"
              />
            </div>

            <p className="text-sm text-center text-slate-500 dark:text-slate-400 mt-4">
              *The stats displayed are placeholder examples. Replace username in code to display actual stats.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;

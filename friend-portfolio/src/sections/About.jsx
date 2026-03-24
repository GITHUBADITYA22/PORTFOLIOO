import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding py-24 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold heading-gradient mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg"
          >
            <p>
              I am a B.Tech Computer Science student at <strong>Lovely Professional University</strong>, with a strong focus on full-stack development and building real-world web applications. I enjoy working on practical projects that solve real problems and improve user experience.
            </p>

            <p>
              I have developed applications such as an AI-powered Science Project Advisor and a full-stack recipe platform, gaining hands-on experience with technologies like JavaScript, PHP, Python, and modern web frameworks. Alongside development, I actively practice Data Structures and Algorithms to strengthen my problem-solving skills for technical interviews.
            </p>

            <p>
              Currently, I am working on more advanced and scalable projects, including a real estate platform, to improve my development and system design abilities. My goal is to become a skilled software developer capable of building efficient and impactful applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1 w-full"
          >
            <div className="glass-effect rounded-2xl p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Education</h3>
                <div className="pb-4 border-b border-slate-200 dark:border-slate-700">
                  <p className="font-semibold text-blue-600 dark:text-blue-400 text-lg">B.Tech in Computer Science</p>
                  <p className="text-slate-500 dark:text-slate-400">Lovely Professional University • 2023- 2027</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Areas of Interest</h3>
                <div className="flex flex-wrap gap-2">
                  {['Data Structures', 'Full Stack Development', 'Machine Learning', 'DevOps'].map((interest, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Soft Skills</h3>
                <div className="flex gap-4 text-slate-600 dark:text-slate-400 text-sm">
                  <span>✔ Problem Solving</span>
                  <span>✔ Team Leadership</span>
                  <span>✔ Adaptability</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden pt-24"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 text-center md:text-left z-10"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 font-medium text-sm mb-4"
          >
            B.Tech Computer Science Student
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="heading-gradient">John Doe</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-300">
            Software Developer | ML Enthusiast
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Passionate about building scalable web applications and exploring the cutting edge of Machine Learning. Turning complex problems into elegant solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
            <Link 
              to="projects" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
            >
              <button className="flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/30 w-full sm:w-auto">
                View Projects
                <ArrowRight size={18} />
              </button>
            </Link>
            <a 
              href="/resume.pdf" 
              download 
              className="flex items-center gap-2 px-8 py-3.5 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-blue-500 rounded-full font-medium transition-all w-full sm:w-auto justify-center"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-start gap-6 pt-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
              <FaGithub size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
              <FaLinkedin size={28} />
            </a>
            <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors transform hover:scale-110">
              <SiLeetcode size={28} />
            </a>
            <a href="https://hackerrank.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-green-600 dark:hover:text-green-500 transition-colors transform hover:scale-110">
              <FaHackerrank size={28} />
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-[400px] aspect-square relative z-10 hidden md:block"
        >
          <div className="w-full h-full rounded-full p-2 bg-gradient-to-tr from-blue-500 to-purple-500 relative">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-background bg-slate-200 dark:bg-slate-800">
              {/* Replace with actual image later */}
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce">
            <span className="text-2xl">💻</span>
          </div>
          <div className="absolute top-10 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce" style={{ animationDelay: '1s' }}>
            <span className="text-2xl">🚀</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

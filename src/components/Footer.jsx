import React from 'react';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">

          <div className="space-y-2">
            <h3 className="text-xl font-bold heading-gradient">Portfolio.</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm">
              A modern, responsive, and dynamic personal portfolio built with React and Tailwind CSS.
            </p>
          </div>

          <div className="flex space-x-5">
            <a href="https://github.com/GITHUBADITYA22" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/aditya-kumar-b20650293/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://leetcode.com/u/adittyarajputt/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <SiLeetcode size={24} />
            </a>
            <a href="https://hackerrank.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <FaHackerrank size={24} />
            </a>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {currentYear} Aditya Kumar. All rights reserved.
          </p>
          <div className="text-slate-500 dark:text-slate-400 text-sm mt-4 md:mt-0">
            Visitor Count: <span className="font-mono font-bold text-blue-500">15</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

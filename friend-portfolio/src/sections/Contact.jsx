import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, \${formData.name}! Your message has been simulated to send.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold heading-gradient mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400">Feel free to reach out for collaborations or just a friendly hello. </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">Contact Information</h3>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Email</p>
                  <a href="mailto:johndoe@example.com" className="text-lg font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-500 transition-colors">
                    johndoe@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Phone</p>
                  <a href="tel:+1234567890" className="text-lg font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-500 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Location</p>
                  <p className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </div>

            {/* Resume Placeholder */}
            <div className="glass-effect rounded-2xl p-8 flex justify-between items-center text-left hover:-translate-y-1 transition-transform border border-blue-200 dark:border-blue-900/50">
              <div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200">My Resume</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Download my latest resume in PDF format.</p>
              </div>
              <a href="/resume.pdf" download className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-md shadow-blue-500/30 transition-all">
                Download
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 glass-effect rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5" 
                  placeholder="How can I help you?" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-none" 
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium shadow-lg shadow-blue-500/30 transition-all font-semibold"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

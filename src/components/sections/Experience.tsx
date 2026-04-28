"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const subjects = ['DS', 'Algorithms', 'OOP', 'DBMS', 'OS', 'CA', 'AI'];

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1280px] mx-auto" id="experience">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="font-manrope text-5xl font-bold text-white mb-4">Education & Academic Foundation</h2>
        <div className="h-1 w-20 bg-primary mx-auto"></div>
      </motion.div>
      
      <div className="relative max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative pl-12"
        >
          {/* Timeline Dot */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
            className="absolute left-0 top-2 w-6 h-6 bg-primary rounded-full border-4 border-[#050a14] z-10 shadow-[0_0_15px_rgba(5,102,217,0.5)]"
          ></motion.div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden group"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] -mr-16 -mt-16 group-hover:bg-primary/20 transition-all duration-700"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
              <div className="text-center md:text-left">
                <h3 className="font-manrope text-3xl font-extrabold text-white mb-2 tracking-tight">BSc in Computer Science & Engineering</h3>
                <p className="text-primary text-lg font-semibold italic mb-4">American International University-Bangladesh (AIUB)</p>
                <p className="text-on-surface-variant text-sm font-bold uppercase tracking-widest opacity-60">Graduating 2025</p>
              </div>
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-primary/10 border border-primary/20 p-6 rounded-3xl text-center min-w-[140px] shadow-lg"
              >
                <span className="block text-primary text-3xl font-black mb-1">3.32</span>
                <span className="text-xs uppercase font-bold text-white/40 tracking-widest">CGPA / 4.00</span>
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-2 mt-8 justify-center md:justify-start">
              {subjects.map((subject, i) => (
                <motion.span 
                  key={subject} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                  className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm font-medium hover:border-primary/30 hover:text-white transition-all duration-300"
                >
                  {subject}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

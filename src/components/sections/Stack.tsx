"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Stack = () => {
  const technologies = [
    { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
    { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'Framer Motion', icon: 'https://cdn.simpleicons.org/framer/black' },
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'GraphQL', icon: 'https://cdn.simpleicons.org/graphql/E10098' },
    { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1280px] mx-auto" id="stack">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="font-manrope text-5xl font-bold text-white mb-4">Technology Stack</h2>
        <div className="h-1 w-20 bg-primary mx-auto"></div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6"
      >
        {technologies.map((tech) => (
          <motion.div 
            key={tech.name}
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.05 }}
            className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group hover:bg-primary-container/20 transition-all duration-300 border border-white/5 shadow-xl"
          >
            <div className="w-12 h-12 relative flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
              <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
            </div>
            <span className="font-inter text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-primary transition-colors">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stack;

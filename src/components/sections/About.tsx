"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  const floatingIcons = [
    { src: 'https://cdn.simpleicons.org/react/61DAFB', top: '-5%', left: '5%', delay: 0 },
    { src: 'https://cdn.simpleicons.org/nextdotjs/white', top: '25%', left: '-12%', delay: 1 },
    { src: 'https://cdn.simpleicons.org/nodedotjs/339933', top: '75%', left: '-5%', delay: 0.5 },
    { src: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', top: '5%', right: '-12%', delay: 1.5 },
    { src: 'https://cdn.simpleicons.org/postgresql/4169E1', top: '55%', right: '-8%', delay: 2 },
    { src: 'https://cdn.simpleicons.org/mongodb/47A248', top: '85%', right: '10%', delay: 2.5 },
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1280px] mx-auto relative overflow-hidden" id="about">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="font-manrope text-5xl font-bold text-white mb-3">About Me</h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-1 bg-primary mx-auto"
        ></motion.div>
      </motion.div>
      
      <div className="grid grid-cols-12 gap-8 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="col-span-12 lg:col-span-5 flex justify-center relative"
        >
          {/* Floating Icons Container */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            {floatingIcons.map((icon, i) => (
              <motion.div
                key={i}
                className="absolute w-12 h-12 md:w-14 md:h-14 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-2.5 z-20 flex items-center justify-center shadow-xl"
                style={{ 
                  top: icon.top, 
                  left: icon.left, 
                  right: icon.right 
                }}
                animate={{ 
                  y: [0, -12, 0],
                  rotate: [0, 8, -8, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  delay: icon.delay,
                  ease: "easeInOut"
                }}
              >
                <img src={icon.src} alt="tech" className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}

            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-2 border-primary/30 p-1 bg-gradient-to-tr from-primary/20 to-transparent shadow-[0_0_60px_rgba(5,102,217,0.15)] z-10">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image 
                  src="/Jahidul.jpg" 
                  alt="Jahidul Islam" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-12 lg:col-span-7 text-center lg:text-left"
        >
          <div className="space-y-5">
            <p className="font-inter text-lg md:text-xl text-white/90 leading-relaxed font-medium">
              Hi! I'm <span className="text-primary">Jahidul Islam</span>, a passionate frontend developer and aspiring MERN stack software developer.
            </p>
            <p className="font-inter text-base md:text-lg text-on-surface-variant leading-relaxed opacity-80">
              I enjoy building user-friendly, responsive and visually appealing web applications. Currently, I am honing my skills in the MERN stack, exploring new technologies and pushing my limits in solving challenging coding problems.
            </p>
            <p className="font-inter text-base md:text-lg text-on-surface-variant leading-relaxed opacity-80">
              In the future, I aspire to contribute to impactful projects that push boundaries and deliver exceptional user experiences. My growing passion for the web development field motivates me to learn, adapt and stay ahead in this ever-evolving industry.
            </p>
            <div className="pt-4 flex justify-center lg:justify-start gap-4">
              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center">
                <span className="text-primary font-bold text-xl tracking-tighter">MERN</span>
                <span className="text-[10px] uppercase font-black tracking-widest opacity-40">Focused</span>
              </div>
              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center">
                <span className="text-primary font-bold text-xl tracking-tighter">100%</span>
                <span className="text-[10px] uppercase font-black tracking-widest opacity-40">Committed</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

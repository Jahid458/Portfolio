"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Hero = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text Entrance
      gsap.from(".hero-title-line", {
        y: 100,
        opacity: 0,
        rotate: 2,
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2
      });

      // Parallax Effect on Image
      window.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 30;
        const yPos = (clientY / window.innerHeight - 0.5) * 30;

        gsap.to(imageRef.current, {
          x: xPos,
          y: yPos,
          duration: 1,
          ease: "power2.out"
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-24 md:pt-32 pb-16 px-6 md:px-12 max-w-[1280px] mx-auto min-h-[95vh] flex flex-col justify-center overflow-hidden">
      {/* Dynamic Background Noise/Texture Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="grid grid-cols-12 gap-8 items-center relative z-10">
        <div className="col-span-12 lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-[11px] uppercase font-black tracking-[0.2em] text-primary-foreground/80">Available for innovative projects</span>
          </motion.div>
          <div className="overflow-hidden mb-2">
            <h1 className="hero-title-line font-manrope text-4xl md:text-7xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter">
              Jahidul <span className="italic text-primary">Islam</span>
            </h1>
          </div>
          <div className="overflow-hidden mb-8">
            <h1 className="hero-title-line font-manrope text-2xl md:text-5xl lg:text-6xl font-black text-white/40 leading-[1] tracking-tighter uppercase">
              Frontend <span className="text-white/20">&</span> Web Developer
            </h1>
          </div>

          <p className="hero-text font-inter text-lg md:text-xl text-white/40 max-w-xl mb-12 leading-relaxed italic">
            "Crafting <span className="text-white/80">high-performance</span> web applications with <span className="text-primary">precision</span> and <span className="text-secondary">modern aesthetics</span>."
          </p>

          <div className="hero-text flex flex-wrap gap-5 items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 transition-all flex items-center gap-3"
            >
              Start a Project <span className="text-xl">→</span>
            </motion.button>
            <div className="flex gap-4">
              {[
                { icon: <LinkedinIcon className="w-6 h-6" />, href: "https://www.linkedin.com/in/md-jahidul-islam898/" },
                { icon: <GithubIcon className="w-6 h-6" />, href: "https://github.com/Jahid458" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, scale: 1.1, color: '#3b82f6', borderColor: 'rgba(59, 130, 246, 0.4)' }}
                  className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center text-white/30 transition-all duration-500 bg-white/5 backdrop-blur-xl"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 relative flex justify-center lg:justify-end">
          <div ref={imageRef} className="relative group max-w-[340px] w-full transform-gpu">
            {/* Glow Aura */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>

            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 p-4 bg-white/5 backdrop-blur-3xl shadow-2xl">
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden">
                <Image
                  alt="Jahidul Islam"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src="/Jahidul.jpg"
                  fill
                  priority
                />
              </div>
            </div>

            {/* Floating Tech Badges (Staggered Floating) */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 w-20 h-20 glass-morphism rounded-3xl flex items-center justify-center shadow-2xl z-20 border border-white/20"
            >
              <img src="https://cdn.simpleicons.org/react/61DAFB" className="w-10 h-10 object-contain" alt="React" />
            </motion.div>
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -10, 0]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 w-20 h-20 glass-morphism rounded-3xl flex items-center justify-center shadow-2xl z-20 border border-white/20"
            >
              <img src="https://cdn.simpleicons.org/nodedotjs/339933" className="w-10 h-10 object-contain" alt="Node" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

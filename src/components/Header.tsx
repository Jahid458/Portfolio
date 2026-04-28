"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Stack', href: '#stack' },
    { name: 'Education', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <div className="fixed top-0 w-full z-50 px-4 md:px-6 py-4 flex justify-center pointer-events-none">
        <motion.nav 
          initial={false}
          animate={{
            width: isScrolled ? 'fit-content' : '100%',
            maxWidth: isScrolled ? '800px' : '1280px',
            borderRadius: isScrolled ? '999px' : '0px',
            backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.7)' : 'rgba(15, 23, 42, 0)',
            backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
            border: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0)',
            y: isScrolled ? 10 : 0,
            paddingLeft: isScrolled ? '1.5rem' : '2rem',
            paddingRight: isScrolled ? '1.5rem' : '2rem',
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto flex justify-between items-center h-14 md:h-18 shadow-2xl shadow-black/20"
        >
          <div className="flex items-center gap-3">
            <div className="relative h-6 w-24 md:h-8 md:w-32 flex items-center group">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                fill 
                className="object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] group-hover:scale-105 transition-transform"
                priority
              />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                className="font-manrope text-[11px] tracking-widest uppercase font-black text-white/50 hover:text-white transition-all duration-300 relative group" 
                href={link.href}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full font-bold text-[11px] uppercase tracking-wider active:scale-95 transition-all shadow-lg shadow-primary/20">
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white/80 hover:text-white p-2 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[49] bg-slate-950/80 backdrop-blur-2xl md:hidden flex flex-col justify-center items-center p-8 pt-24"
          >
            <div className="flex flex-col gap-8 w-full max-w-sm">
              {navLinks.map((link, i) => (
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  className="font-manrope text-xl tracking-tighter font-black text-white/60 hover:text-primary transition-colors text-center" 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button className="w-full bg-primary text-white py-8 rounded-3xl font-black text-xl shadow-2xl shadow-primary/20 mt-4">
                  Get in Touch
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

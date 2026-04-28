"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  Info,
  Globe,
  Server,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const containerRef = useRef(null);

  const projects = [
    {
      title: 'Xynexa',
      description: 'Xynexa is a powerful team collaboration platform designed to boost productivity, streamline communication, and optimize task management for teams of all sizes. It offers real-time messaging, task tracking, file sharing, AI insights, and more all in one integrated workspace',
      image: 'https://i.ibb.co.com/NnFtmVzy/imageye-imgi-2-xynexa-Dashboard.png',
      tags: ['Next.js', 'React.js', 'Tailwind CSS', 'Moongoose', 'firebase', 'Redux', 'socket.io'],
      github: 'https://github.com/mdabdulkyum1/xynexa',
      live: 'https://xynexa.vercel.app/',
      server: 'https://github.com/mdabdulkyum1/xynexa-nest',
    },
    {
      title: 'Shopino',
      description: 'Shopino is a shopping marketplace built for people who believe everyday objects should bring joy. We curate bold, beautiful products from independent makers and trusted brands — all in one playful place',
      image: 'https://i.ibb.co.com/21D6qVfX/shopino.png',
      tags: ['Next.js', 'React.js', 'Mongoose', 'Tailwindcss', 'firebase'],
      github: 'https://github.com/Jahid458/Shopino',
      live: 'https://shopino.vercel.app/',
    },
    {
      title: 'Today News',
      description: 'News Today dynamic news platform with both user and admin functionalities. Users can submit articles, browse approved content, and access premium articles by subscribing. Admins manage article approvals, user roles, publishers, and subscription plans. The platform features a robust article management system, advanced search and filtering options, subscription-based content, and real-time article view tracking. The admin dashboard includes data visualization tools for user and publisher management. The project also integrates email/password authentication and third-party login options for seamless user access.',
      image: 'https://i.ibb.co.com/M5kxPRZT/imageye-imgi-1-todaynews.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS', 'Express', 'MongoDB', 'Firebase'],
      github: 'https://github.com/Jahid458/today-news',
      live: 'https://today-news-9ce79.web.app/',
      server: 'https://github.com/Jahid458/today-news-server',
    },
    {
      title: 'Study Stream',
      description: 'StudyStream is an online assignment portal that allows teachers to create assignments and students to take and submit them. Users can view assignment lists, create, update, and delete their own assignments, ensuring secure access. Students submit assignments with a document link and description, which move to a `pending` state for teacher review. Teachers can grade submissions, and students can view their grades and feedback.',
      image: 'https://i.ibb.co.com/RThvybnX/imageye-imgi-1-3.png',
      tags: ['ReactJS', 'NodeJS', 'Express', 'MongoDB', 'Context API'],
      github: 'https://github.com/Jahid458/Studystream-client',
      live: 'https://assignment-11-3a173.web.app/',
      server: 'https://github.com/Jahid458/today-news-server',
    },
    {
      title: 'Crowdcube',
      description: 'CrowdCube is an innovative crowdfunding platform that empowers individuals and organizations to raise funds for their causes effortlessly. It offers a user-friendly interface to create, manage, and track campaigns while fostering transparency and trust. With responsive design and dark/light mode support, CrowdCube ensures an exceptional experience for all users.',
      image: 'https://i.ibb.co.com/k6rQRq5g/imageye-imgi-5-1.png',
      tags: ['HTML', 'CSS', 'Javascript', 'React.js', 'NodeJS', 'Express', 'MongoDB', 'Firebase Authentication'],
      github: 'https://github.com/Jahid458/Crowdcube-clients',
      live: 'https://crowdcube-crowd-funding.web.app/',
      server: 'https://github.com/Jahid458/Crowdcube-servers',
    },

    {
      title: 'FrostGuard Winter Cloth Donation',
      description: 'The Winter Clothing Donation website is designed to bridge the gap between compassionate donors and those in need, ensuring essential winter clothing reaches vulnerable communities across Bangladesh.Through this platform, donors can easily contribute their gently used or new winter garments via convenient pickup services, drop-off locations, or targeted campaigns. By connecting donors with volunteers and local organizations, the website fosters a collaborative approach to combat cold-weather hardships, promoting social responsibility and community support.This encourages individuals to participate actively in creating a warmer and more caring society. the website seeks to empower both donors and recipients, making generosity a driving force for positive change.',
      image: 'https://i.ibb.co.com/Y4VjRT0Y/Screenshot-2026-04-28-160400.png',
      tags: ['Html ', 'css', 'javascript', 'Reactjs', 'firebase'],
      github: 'https://github.com/Jahid458/ForstGuard-cloth-donation',
      live: 'https://cloth-donation-app.web.app/ ',
      server: '#',
    },
  ];

  useEffect(() => {
    const el = containerRef.current;
    gsap.fromTo(gsap.utils.toArray('.project-card'),
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1280px] mx-auto" id="projects" ref={containerRef}>
      <div className="text-center mb-16">
        <h2 className="font-manrope text-5xl font-bold text-white mb-4">Featured Projects</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">Selected works that showcase technical expertise and creative solutions.</p>
        <div className="h-1 w-20 bg-primary mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="project-card group cursor-pointer glass-card rounded-3xl overflow-hidden flex flex-col h-full shadow-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={project.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {project.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded-full bg-primary/20 backdrop-blur-md border border-white/10 text-[10px] uppercase font-bold text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-manrope text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
              <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed mb-6 flex-grow">{project.description}</p>

              <div className="space-y-3 mt-auto">
                <Dialog>
                  <DialogTrigger className="w-full">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full bg-white/5 hover:bg-white/10 text-white border-white/10 rounded-xl px-3 h-10 font-bold group/btn transition-all active:scale-[0.98] hover:scale-y-[0.98]"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Info className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] bg-slate-950 border-white/10 text-white overflow-hidden p-0 rounded-[2.5rem]">
                    {selectedProject && (
                      <div className="flex flex-col">
                        <div className="relative aspect-video w-full overflow-hidden max-h-[250px]">
                          <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                        </div>

                        <div className="p-8 space-y-6">
                          <DialogHeader>
                            <DialogTitle className="text-3xl font-manrope font-black tracking-tight">{selectedProject.title}</DialogTitle>
                            <DialogDescription className="text-on-surface-variant text-sm leading-relaxed pt-2">
                              {selectedProject.description}
                            </DialogDescription>
                          </DialogHeader>

                          <div>
                            <h4 className="text-[10px] uppercase font-black tracking-widest text-white/40 mb-3">Technology Stack</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.tags.map((tag: string) => (
                                <span key={tag} className="px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-3 pt-2">
                            <motion.a
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              href={selectedProject.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-primary text-white px-4 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                            >
                              <Globe className="w-4 h-4" /> Live Preview
                            </motion.a>
                            <div className="grid grid-cols-2 gap-3">
                              <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href={selectedProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                              >
                                <GithubIcon className="w-4 h-4" /> Client
                              </motion.a>
                              <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href={selectedProject.server}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                              >
                                <Server className="w-4 h-4" /> Server
                              </motion.a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>

                <div className="flex gap-2">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 px-3 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <Globe className="w-3.5 h-3.5" /> Live
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white/5 border border-white/10 text-white hover:bg-white/10 px-3 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" /> GitHub
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

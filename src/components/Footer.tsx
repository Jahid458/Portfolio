import React from 'react';

const Footer = () => {
  const socials = [
    { name: 'GitHub', href: 'https://github.com/Jahid458' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/md-jahidul-islam898/' },
    { name: 'Dribbble', href: '#' },
    { name: 'Email', href: 'mailto:jahidul.islam0248@gmail.com' },
  ];

  return (
    <footer className="w-full border-t border-white/5 py-10 bg-slate-950">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12 gap-6">
        <div className="text-lg font-bold text-white/90">Jahidul Islam</div>
        <div className="flex gap-6 md:gap-10">
          {socials.map((social) => (
            <a
              key={social.name}
              className="font-manrope text-[10px] tracking-widest uppercase text-white/40 hover:text-white transition-all duration-300 cursor-pointer hover:-translate-y-1"
              href={social.href}
              target={social.href.startsWith('http') ? "_blank" : undefined}
              rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
            >
              {social.name}
            </a>
          ))}
        </div>
        <p className="font-manrope text-[10px] tracking-widest uppercase text-white/40 text-center md:text-right">
          © 2024 Jahidul Islam. Engineered for Excellence.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

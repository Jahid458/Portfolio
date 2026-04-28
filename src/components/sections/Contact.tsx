"use client";

import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    { icon: <Phone className="text-primary w-6 h-6" />, label: 'Call me', value: '+880152120396', color: 'primary' },
    { icon: <MessageCircle className="text-green-500 w-6 h-6" />, label: 'WhatsApp', value: '+8801641996414', color: 'green' },
    { icon: <Mail className="text-blue-500 w-6 h-6" />, label: 'Email', value: 'jahidul.islam0248@gmail.com', color: 'blue' },
    { icon: <MapPin className="text-purple-500 w-6 h-6" />, label: 'Location', value: 'Bashabo, Dhaka', color: 'purple' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1280px] mx-auto" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="font-manrope text-5xl font-bold text-white mb-4">Contact Us</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          We‘d love to hear from you! Reach out to us using the information below or by filling out the form.
        </p>
        <div className="h-1 w-20 bg-primary mx-auto mt-6"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-white/5"
      >
        <div className="p-10 md:p-14 lg:w-1/2 bg-primary/5 backdrop-blur-3xl border-r border-white/5">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-manrope text-4xl font-black text-white mb-8 tracking-tight"
          >
            Get in <span className="text-primary italic">Touch</span>
          </motion.h3>

          <div className="space-y-10">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                className="flex items-center gap-6 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`w-14 h-14 rounded-2xl bg-${info.color}-500/10 flex items-center justify-center border border-${info.color}-500/20 group-hover:bg-${info.color}-500/20 transition-all duration-300 shadow-lg`}
                >
                  {info.icon}
                </motion.div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-1">{info.label}</p>
                  <p className="text-white text-lg font-bold">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="p-10 md:p-14 lg:w-1/2 bg-slate-950/40">
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-8"
          >
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
            <input type="hidden" name="to" value="jahidul.islam0248@gmail.com" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="font-black text-[10px] uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                <Input
                  name="name"
                  required
                  className="bg-white/5 border-0 border-b-2 border-white/10 focus:border-primary rounded-none px-0 py-6 h-auto text-white placeholder:text-white/10 transition-all focus:ring-0 text-lg font-medium"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-3">
                <label className="font-black text-[10px] uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                <Input
                  name="email"
                  type="email"
                  required
                  className="bg-white/5 border-0 border-b-2 border-white/10 focus:border-primary rounded-none px-0 py-6 h-auto text-white placeholder:text-white/10 transition-all focus:ring-0 text-lg font-medium"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="font-black text-[10px] uppercase tracking-widest text-white/40 ml-1">Message Subject</label>
              <Input
                name="subject"
                required
                className="bg-white/5 border-0 border-b-2 border-white/10 focus:border-primary rounded-none px-0 py-6 h-auto text-white placeholder:text-white/10 transition-all focus:ring-0 text-lg font-medium"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="space-y-3">
              <label className="font-black text-[10px] uppercase tracking-widest text-white/40 ml-1">Your Message</label>
              <Textarea
                name="message"
                required
                className="bg-white/5 border-0 border-b-2 border-white/10 focus:border-primary rounded-none px-0 py-6 text-white placeholder:text-white/10 transition-all focus:ring-0 min-h-[150px] resize-none text-lg font-medium"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-8 rounded-[1.25rem] font-black text-xl hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3"
              >
                Send Message
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

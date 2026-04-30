"use client";

import { motion } from "framer-motion";
import { personalData } from "@/constants/data";
import { Code2, Globe, Heart, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-400">My Journey</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                {personalData.about.journey}
              </p>
              <div className="flex flex-wrap gap-4">
                {personalData.about.hobbies.map((hobby) => (
                  <span key={hobby} className="px-4 py-2 bg-slate-800 rounded-lg text-sm border border-slate-700 text-slate-300">
                    #{hobby}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <AboutCard 
                icon={<Code2 className="text-blue-400" />} 
                title="SaaS Dev" 
                desc="Building scalable cloud solutions" 
              />
              <AboutCard 
                icon={<Rocket className="text-indigo-400" />} 
                title="Fast Learner" 
                desc="Always exploring new tech stack" 
              />
              <AboutCard 
                icon={<Globe className="text-blue-400" />} 
                title="Global View" 
                desc="Passionate about global tech" 
              />
              <AboutCard 
                icon={<Heart className="text-indigo-400" />} 
                title="Hobbies" 
                desc="Traveling & Photography" 
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-blue-500/50 transition-colors">
      <div className="mb-4">{icon}</div>
      <h4 className="font-bold mb-1">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}

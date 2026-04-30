"use client";

import { motion } from "framer-motion";
import { personalData } from "@/constants/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <p className="text-slate-400">My specialized toolset for building modern applications</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {personalData.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-slate-800 border border-slate-700 rounded-2xl flex flex-col items-center justify-center gap-4 group hover:border-blue-500/50 transition-all shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                {/* <SkillIcon name={skill.icon} /> */}
                <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
              </div>
              <span className="font-semibold text-slate-300 group-hover:text-blue-400 transition-colors">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Simple placeholder for icons since we don't have actual SVG assets for all
function SkillIcon({ name }: { name: string }) {
  // In a real app, you'd use dedicated icons like react-icons/si
  return (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

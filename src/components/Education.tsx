"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { personalData } from "@/constants/data";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Education</h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {personalData.education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-slate-700 pb-8 last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-slate-950" />
              <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/30 transition-colors shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <GraduationCap className="text-blue-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm bg-slate-900 px-3 py-1 rounded-full">
                    <Calendar size={14} />
                    {edu.period}
                  </div>
                </div>
                <h4 className="text-lg text-blue-400 mb-4">{edu.institution}</h4>
                <p className="text-slate-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

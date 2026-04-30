"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";
import { personalData } from "@/constants/data";
import { toast } from "react-toastify";

export default function Contact() {
  const sendMessage = (e: any) => {
    e.preventDefault();
    toast.success("Message sent successfully ✅");
  };

  return (
    <section id="contact" className="pt-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-slate-800/30 rounded-[3rem] border border-slate-700 p-8 md:p-16 overflow-hidden relative">
          {/* Decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]" />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Let&apos;s Work <br />
                  <span className="text-blue-500">Together</span>
                </h2>
                <p className="text-slate-400 text-lg mb-12 max-w-md">
                  Have a project in mind or just want to say hi? Feel free to
                  reach out. I&apos;m always open to discussing new projects and
                  creative ideas.
                </p>
              </motion.div>

              <div className="space-y-8">
                <ContactItem
                  icon={<Mail className="text-blue-400" />}
                  label="Email"
                  value={personalData.contact.email}
                  href={`mailto:${personalData.contact.email}`}
                />
                <ContactItem
                  icon={<Phone className="text-indigo-400" />}
                  label="Phone"
                  value={personalData.contact.phone}
                  href={`tel:${personalData.contact.phone}`}
                />
                <ContactItem
                  icon={<MessageSquare className="text-blue-400" />}
                  label="WhatsApp"
                  value={personalData.contact.whatsapp}
                  href={`https://wa.me/${personalData.contact.whatsapp.replace(/\D/g, "")}`}
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 p-8 rounded-3xl border border-slate-700 shadow-2xl"
            >
              <form onSubmit={sendMessage} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    name="name"
                    label="Name"
                    placeholder="Enter your name"
                    required
                  />
                  <Input
                    name="email"
                    label="Email"
                    placeholder="example@gmail.com"
                    type="email"
                    required
                  />
                </div>
                <Input
                  name="subject"
                  label="Subject"
                  placeholder="Project Inquiry"
                  required
                />{" "}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <footer className="mt-20 border-t border-slate-800 bg-slate-950/50 pt-12 pb-6">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 text-center md:text-left max-w-3xl mx-auto">
      
      {/* Brand Section */}
      <div className="space-y-3 flex flex-col items-center md:items-start">
        <h3 className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          {personalData.name}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
          Building digital experiences with precision and passion.
        </p>
      </div>

      {/* Links */}
      <div className="flex flex-col items-center md:items-start space-y-3">
        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
          Links
        </h4>
        <nav className="flex flex-col space-y-1.5 text-sm text-slate-400">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>
      </div>

      {/* Socials */}
      <div className="space-y-4 flex flex-col items-center md:items-start">
        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
          Connect
        </h4>

        <div className="flex gap-3">
          {[
            { Icon: Github, href: personalData.socials.github },
            { Icon: Linkedin, href: personalData.socials.linkedin },
            { Icon: Facebook, href: personalData.socials.facebook },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
            >
              <item.Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom line */}
    <div className="text-center text-slate-500 text-sm border-t border-slate-800 pt-3">
      © {new Date().getFullYear()} {personalData.name}. All rights reserved.
    </div>
  </div>
</footer>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a href={href} className="flex items-center gap-6 group">
      <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform border border-slate-700">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
          {label}
        </p>
        <p className="text-lg font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
          {value}
        </p>
      </div>
    </a>
  );
}

function Input({
  name,
  label,
  placeholder,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-400">{label}</label>
      <input
        type={type}
        name={name}
        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

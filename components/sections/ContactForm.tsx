"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { hasSocialLink } from "@/lib/utils";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMPTY_FORM: FormState = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const prefersReducedMotion = useReducedMotion();
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto: link — works without a backend
    const mailto = `mailto:${siteConfig.links.email}?subject=${encodeURIComponent(
      form.subject || "Portfolio contact"
    )}&body=${encodeURIComponent(
      `Hi Shrey,\n\n${form.message}\n\n— ${form.name} (${form.email})`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(EMPTY_FORM);
    }, 4000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-[#0d0d0d] border border-white/8 text-[#f5f5f5] text-sm placeholder-[#555] " +
    "focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/40 transition-colors";

  return (
    <div className="max-w-6xl mx-auto px-6 pb-28">
      <AnimatedSection>
        <SectionHeader
          label="Get In"
          accent="Touch"
          description="Have a project, opportunity, or just want to say hello? I'd love to hear from you."
        />
      </AnimatedSection>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* ── Left: contact info ─────────────────────────────────────── */}
        <AnimatedSection direction="left" className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-[#f5f5f5] mb-5">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="flex items-center gap-3 text-sm text-[#888] hover:text-violet-400 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0 group-hover:border-violet-500/50 transition-colors">
                    <Mail size={16} className="text-violet-400" />
                  </div>
                  <span className="break-all">{siteConfig.links.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.links.phone}`}
                  className="flex items-center gap-3 text-sm text-[#888] hover:text-violet-400 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0 group-hover:border-violet-500/50 transition-colors">
                    <Phone size={16} className="text-violet-400" />
                  </div>
                  {siteConfig.links.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#888]">
                <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-violet-400" />
                </div>
                Johannesburg, Gauteng, South Africa
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#444] mb-4">
              Find Me Online
            </h3>
            <div className="flex items-center gap-4">
              {hasSocialLink(siteConfig.links.github) && (
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-lg border border-white/8 flex items-center justify-center text-[#888] hover:text-violet-400 hover:border-violet-500/40 transition-colors"
                >
                  <Github size={18} />
                </a>
              )}
              {hasSocialLink(siteConfig.links.linkedin) && (
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-lg border border-white/8 flex items-center justify-center text-[#888] hover:text-violet-400 hover:border-violet-500/40 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
              )}
              <a
                href={`mailto:${siteConfig.links.email}`}
                aria-label="Email"
                className="w-10 h-10 rounded-lg border border-white/8 flex items-center justify-center text-[#888] hover:text-violet-400 hover:border-violet-500/40 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Availability note */}
          <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-2">
              Availability
            </p>
            <p className="text-sm text-[#888] leading-relaxed">
              Currently open to full-time roles, internships, and freelance
              projects. Response time: within 24 hours.
            </p>
          </div>
        </AnimatedSection>

        {/* ── Right: form ───────────────────────────────────────────── */}
        <AnimatedSection delay={0.1} className="lg:col-span-3">
          <div className="rounded-xl border border-white/8 bg-[#111] p-8">
            {submitted ? (
              <motion.div
                initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <CheckCircle size={28} className="text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold text-[#f5f5f5]">
                  Email client opened!
                </h3>
                <p className="text-sm text-[#888]">
                  Your message is ready to send. See you in the inbox!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-[#888] mb-2"
                    >
                      Your Name <span className="text-violet-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-[#888] mb-2"
                    >
                      Email Address <span className="text-violet-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-medium text-[#888] mb-2"
                  >
                    Subject <span className="text-violet-400">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Job opportunity / Project inquiry"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-[#888] mb-2"
                  >
                    Message <span className="text-violet-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg
                    bg-violet-600 hover:bg-violet-700 active:bg-violet-800
                    text-white font-medium transition-colors
                    focus-visible:outline-violet-400 disabled:opacity-60"
                >
                  <Send size={16} />
                  Send Message
                </button>

                <p className="text-xs text-[#555] text-center">
                  I'll get back to you within 1–2 business days.
                  This opens your email client. No data is stored on this site.
                </p>
              </form>
            )}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
